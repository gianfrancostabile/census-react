import Exception from './Exception';

class CensusPersonRequestException extends Exception {
  constructor() {
    super('Error during the request to consult the person of the Census API');
  }
}

export default CensusPersonRequestException;