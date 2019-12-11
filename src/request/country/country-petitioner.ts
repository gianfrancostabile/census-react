import axios from 'axios';
import TokenPetitioner from './../token/token-petitioner';

export interface Country {
  isoCode: string;
  name: string;
}

export class CountryPetitioner {

  static doRequest(): Promise<Country[]> {
    return new Promise(async (resolve, reject) => {
      const jwtToken = await TokenPetitioner.doRequest();

      const countriesCensus = await axios.get(
        'http://localhost:9090/census/countries',
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      )
        .then(response => response.data)
        .catch(() => reject('Fail to retrieve the countries from Census API'));

      await axios
        .get(
          `https://restcountries.eu/rest/v2/alpha?codes=${countriesCensus.join(';')}`
        )
        .then(response => {
          const mappedCountries = response.data.map((country: any) => ({
            isoCode: country.alpha2Code,
            name: country.name
          }))
          resolve(mappedCountries);
        })
        .catch(() => reject('Fail to retrieve the countries from Rest Countries API'));
    });
  }
}