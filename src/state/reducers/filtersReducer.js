import { UPDATE_FILTERS } from '../actions/';

const initialIncidents = {
  rank1: true,
  rank2: true,
  rank3: true,
  rank4: true,
  rank5: true,
};

const initialState = {
  stateName: null,
  zipCode: null,
  startDate: '',
  endDate: '',
  incidents: initialIncidents,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
