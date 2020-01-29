import Exception from "./Exception";

class RestCountryContriesRequestException extends Exception {
  constructor() {
    super('Error during the request to consult the countries of the Rest Country API')
  }
}

export default RestCountryContriesRequestException;