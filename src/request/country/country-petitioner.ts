import axios from 'axios';
import CensusCountriesRequestException from './../../exceptions/CensusCountriesRequestException';
import NullTokenException from './../../exceptions/NullTokenException';
import RestCountryContriesRequestException from './../../exceptions/RestCountryContriesRequestException';
import TokenPetitioner from './../token/token-petitioner';
import { CENSUS_REST, COUNTRIES_REST } from './../../models/base-url';

export interface Country {
  isoCode: string;
  name: string;
}

export class CountryPetitioner {

  static doRequest(): Promise<Country[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const jwtToken = await TokenPetitioner.doRequest().catch(() => { throw new NullTokenException(); });

        const countriesCensus = await axios.get(
          `${CENSUS_REST}/countries`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            },
            timeout: 5000
          }
        )
          .then(response => response.data)
          .catch(() => { throw new CensusCountriesRequestException(); });

        axios
          .get(
            `${COUNTRIES_REST}/alpha?codes=${countriesCensus.join(';')}`, {
            timeout: 5000
          }
          )
          .then(response => {
            const mappedCountries = response.data.map((country: any) => ({
              isoCode: country.alpha2Code,
              name: country.name
            }));
            resolve(mappedCountries)
          })
          .catch(() => { throw new RestCountryContriesRequestException(); });
      } catch (exception) {
        reject(`Fail to retrieve the countries information. Reason: "${exception.message}"`);
      }
    });
  }
}