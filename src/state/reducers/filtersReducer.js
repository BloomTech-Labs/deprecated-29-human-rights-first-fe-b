import { UPDATE_FILTERS } from '../actions/';

export const initialIncidents = {
  energyDevices: true,
  soft: true,
  hard: true,
  projectiles: true,
  chemical: true,
  presence: true,
  other: true,
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
