import { todoConstants } from '../constants';

const appState = {
};

export default function(state = appState, action) {
  switch (action.type) {
    case todoConstants.FETCH_TODOS:
      console.log(action.payload);
      return {
        CTodo: action.payload['CTodo'] || [],
        ATodo: action.payload['ATodo'] || []
      };
    default:
      return state;
  }
}
