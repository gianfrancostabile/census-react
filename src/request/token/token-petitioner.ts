import axios from 'axios';

class TokenPetitioner {

  static doRequest(): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const token = this.getTokenCookie();
      if (token === undefined) {
        await axios.post(
          'http://localhost:9090/census/authenticate',
          {
            username: 'admin',
            password: 'password'
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
          .then((response: any) => {
            document.cookie = `token=${response.data}; max-age=300`;
            resolve(response.data);
          })
          .catch(() => reject('Fail to authenticate the session.'));
      } else {
        resolve(token);
      }
    });
  }

  private static getTokenCookie(): string | undefined {
    let token = undefined;
    const cookieToken = document.cookie.split(';').find(element => element.startsWith('token='));
    if (cookieToken) {
      token = cookieToken.replace('token=', '');
    }
    return token;
  }
}

export default TokenPetitioner;