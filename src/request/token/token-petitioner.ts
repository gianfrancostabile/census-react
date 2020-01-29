import axios from 'axios';
import store from './../../redux/store';
import ActionType from '../../models/action-type';
import { CENSUS_REST } from './../../models/base-url';

class TokenPetitioner {

  static doRequest(): Promise<string> {
    return new Promise((resolve, reject) => {
      const token = store.getState().token;
      if (token === undefined) {
        axios.post(
          `${CENSUS_REST}/authenticate`,
          {
            username: 'admin',
            password: 'password'
          },
          {
            headers: {
              'Content-Type': 'application/json'
            },
            timeout: 2500
          }
        )
          .then((response: any) => {
            const token = response.data;
            store.dispatch({ type: ActionType.SET_TOKEN, payload: token})
            resolve(token);
          })
          .catch(() => reject('Fail to authenticate the session.'));
      } else {
        resolve(token);
      }
    });
  }
}

export default TokenPetitioner;