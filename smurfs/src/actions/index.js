import axios from "axios";

export const SMURF_ACTION_STARTED = "SMURF_ACTION_STARTED";
export const SMURF_ACTION_SUCCESS = "SMURF_ACTION_SUCCESS";
export const SMURF_ACTION_FAILURE = "SMURF_ACTION_FAILURE";

const client = axios.create({
  baseURL: "http://localhost:3333"
});

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_ACTION_STARTED });
  client
    .get("/smurfs")
    .then(response =>
      dispatch({ type: SMURF_ACTION_SUCSESS, payload: response.data })
    )
    .catch(error => dispatch({ type: SMURF_ACTION_FAILURE, error: error }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: SMURF_ACTION_STARTED });
  client
    .post("/smurfs", smurf)
    .then(response =>
      dispatch({ type: SMURF_ACTION_SUCSESS, payload: response.data })
    )
    .catch(error => dispatch({ type: SMURF_ACTION_FAILURE, error: error }));
};

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: SMURF_ACTION_STARTED });
  client
    .put(`/smurfs/${smurf.id}`, smurf)
    .then(response =>
      dispatch({ type: SMURF_ACTION_SUCSESS, payload: response.data })
    )
    .catch(error => dispatch({ type: SMURF_ACTION_FAILURE, error: error }));
};

export const deleteSmurf = smurfID => dispatch => {
  console.log(smurfID);
  dispatch({ type: SMURF_ACTION_STARTED });
  client
    .delete(`/smurfs/${smurfID}`)
    .then(response =>
      dispatch({ type: SMURF_ACTION_SUCSESS, payload: response.data })
    )
    .catch(error => dispatch({ type: SMURF_ACTION_FAILURE, error: error }));
};
