import {
  FETCHING_INCIDENTS_START,
  FETCHING_INCIDENTS_ERROR,
  FETCHING_INCIDENTS_DONE,
} from '../actions';

const initialState = {
  incidents: [],
  isFetching: false,
  fetched: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_INCIDENTS_START:
      return {
        ...state,
        incidents: action.payload,
        isFetching: true,
      };

    case FETCHING_INCIDENTS_DONE:
      return {
        ...state,
        isFetching: false,
        fetched: true,
      };
    case FETCHING_INCIDENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
