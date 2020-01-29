import Exception from "./Exception";

class NullTokenException extends Exception {
  constructor() {
    super('The token is null');
  }
}

export default NullTokenException;