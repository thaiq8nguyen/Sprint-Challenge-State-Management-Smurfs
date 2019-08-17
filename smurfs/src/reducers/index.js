import {
  SMURF_ACTION_STARTED,
  SMURF_ACTION_SUCCESS,
  SMURF_ACTION_FAILURE
} from "../actions";
const DEFAULT_STATE = {
  smurfs: [],
  error: "",
  isProcessingRequest: false
};

const smurfActionStarted = (state, action) => {
  return { ...state, isProcessingRequest: true };
};
const smurfActionSuccess = (state, action) => {
  return { ...state, isProcessingRequest: false, smurfs: action.payload };
};
const smurfActionFailure = (state, action) => {
  return { ...state, isProcessingRequest: false, error: action.error };
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SMURF_ACTION_STARTED:
      return smurfActionStarted(state, action);
    case SMURF_ACTION_SUCCESS:
      return smurfActionSuccess(state, action);
    case SMURF_ACTION_FAILURE:
      return smurfActionFailure(state, action);

    default:
      return state;
  }
};

export default rootReducer;
