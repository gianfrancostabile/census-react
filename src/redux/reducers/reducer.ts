import ActionType from '../../models/action-type';

interface StoreAction {
  type: ActionType;
  payload: any;
}

const initialState = {
  token: undefined
};

function rootReducer(state = initialState, action: StoreAction) {
  if (action.type === ActionType.SET_TOKEN) {
    return {
      token: action.payload
    }
  }
  return state;
}

export default rootReducer;