// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file
import axios from 'axios';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const FETCHING_INCIDENTS_START = 'FETCH_INCIDENTS_START';
export const FETCHING_INCIDENTS_DONE = 'FETCH_INCIDENTS_DONE';
export const FETCHING_INCIDENTS_ERROR = 'FETCHING_INCIDENTS_ERROR';

export const updateFilters = filters => {
  return { type: UPDATE_FILTERS, payload: filters };
};

export const fetchIncidents = () => dispatch => {
  axios
    .get(`https://b-ds.humanrightsfirst.dev/full-report`)
    .then(res => {
      dispatch({ type: FETCHING_INCIDENTS_START, payload: res.data });
      console.log(res.data, 'data from interacting with ds api');
    })
    .catch(err => {
      dispatch({ type: FETCHING_INCIDENTS_ERROR, payload: err.message });
      console.log(err);
    });
};
// ^^ This is doing NOTHING
