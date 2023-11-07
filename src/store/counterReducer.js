const initialState = {
  counter: 100,
};

// {type: 'INCREMENT'}
// {type: 'DECREMENT'}
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + action.payload };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// action creator
export const increaseCounter = (number) => {
  return { type: "INCREMENT", payload: number };
};
