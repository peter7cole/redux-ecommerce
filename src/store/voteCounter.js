const initialState = {
  candidates: [
    { name: 'Ice Axe', votes: 0 },
    { name: 'Helmet', votes: 0 },
    { name: 'Crampons', votes: 0 },
    { name: 'Shell Jacket', votes: 0 },
    { name: 'Shell Pants', votes: 0 },
    { name: 'Boots', votes: 0 },
    { name: 'Gaiters', votes: 0 },
    { name: 'Glacier Glasses', votes: 0 },
    { name: 'Snacks', votes: 0 }
  ],
  totalVotes: 0
};

// An action will look like this:
// { type: 'INCREMENT', payload: 'Snacks' }

const voteCounter = (state = initialState, action) => {
  let candidates, totalVotes;
  switch (action.type) {
    case 'INCREMENT':
      totalVotes = state.totalVotes + 1;
      candidates = state.candidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      );
      return { candidates, totalVotes };
    case 'DECREMENT':
      totalVotes = state.totalVotes + 1;
      candidates = state.candidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes - 1 }
          : candidate
      );
      return { candidates, totalVotes };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default voteCounter;

// These functions are called 'action creators' since they just create an object that represents an action
export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name
  };
}

export function decrement(name) {
  return {
    type: 'DECREMENT',
    payload: name
  };
}

export function reset() {
  return {
    type: 'RESET'
  };
}
