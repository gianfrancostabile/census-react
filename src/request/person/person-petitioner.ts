import axios from 'axios';
import Person from './../../model/person';
import TokenPetitioner from './../token/token-petitioner';

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
      const jwtToken = await TokenPetitioner.doRequest();

      axios.post('http://localhost:9090/census/',
        [personRequest.ssn],
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
            Country: personRequest.country
          }
        }
      )
        .then(response => response.data)
        .then((apiResponse: ApiResponse) => {
          if (apiResponse.successList.length > 0) {
            resolve(apiResponse.successList[0]);
          } else {
            reject(`Person with ssn: ${personRequest.ssn} and country: ${personRequest.country} doesn't exists`);
          }
        })
        .catch(() => reject(`Person with ssn: ${personRequest.ssn} and country: ${personRequest.country} doesn't exists`)
        );
    });
  }
}