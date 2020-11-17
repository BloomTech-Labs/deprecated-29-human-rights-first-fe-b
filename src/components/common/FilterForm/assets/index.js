// Make a separate Temporary Changes state to act as a staging ground for the changes, so that global state is only changed once.

const initialIncidents = {
  rank1: true,
  rank2: true,
  rank3: true,
  rank4: true,
  rank5: true,
};

const initialTemporaryChanges = {
  stateName: null,
  zipCode: null,
  startDate: '',
  endDate: '',
  incidents: initialIncidents,
};

const incidents = ['Rank 1', 'Rank 2', 'Rank 3', 'Rank 4', 'Rank 5'];

const sources = ['One', 'Two', 'Three', 'Four'];

export { incidents, sources, initialTemporaryChanges };
