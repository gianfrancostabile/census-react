import Exception from "./Exception";

class CensusCountriesRequestException extends Exception {
  constructor() {
    super('Error during the request to consult the countries of the Census API')
  }
}

export default CensusCountriesRequestException;