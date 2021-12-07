const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "POST_COUNTER_INCREMENT":
      return state+1;
    case "POST_COUNTER_DECREMENT":
      return state-1;
    default:
      return state;
  }
};

export default counterReducer;
