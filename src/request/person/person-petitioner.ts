import axios from 'axios';
import Person from '../../models/person';
import TokenPetitioner from './../token/token-petitioner';
import NullTokenException from '../../exceptions/NullTokenException';
import CensusPersonRequestException from '../../exceptions/CensusPersonRequestException';
import Exception from '../../exceptions/Exception';
import { CENSUS_REST } from './../../models/base-url';

export interface PersonRequest {
  ssn: number;
  country: string;
}

interface ApiResponse {
  successList: Person[],
  errorList: number[]
}

export class PersonPetitioner {

  static doRequest(personRequest: PersonRequest): Promise<Person> {
    return new Promise(async (resolve, reject) => {
      try {
        const jwtToken = await TokenPetitioner.doRequest().catch(() => { throw new NullTokenException(); });

        axios.post(`${CENSUS_REST}/`,
          [personRequest.ssn],
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwtToken}`,
              Country: personRequest.country
            },
            timeout: 5000
          }
        )
          .then(response => response.data)
          .then((apiResponse: ApiResponse) => {
            if (apiResponse.successList.length > 0) {
              resolve(apiResponse.successList[0]);
            } else {
              throw new CensusPersonRequestException();
            }
          })
          .catch((exception: Exception) => {
            reject(`Fail to retrieve the person information. Reason: "${exception.message}"`)
          });
      } catch (exception) {
        reject(`Fail to retrieve the person information. Reason: "${exception.message}"`)
      }
    });
  }
}