export const counterIncrement = () => async (dispatch) =>
  dispatch({ type: "POST_COUNTER_INCREMENT" });

export const counterDoubleIncrement = () => async (dispatch) => {
  dispatch({ type: "POST_COUNTER_INCREMENT" });
  dispatch({ type: "POST_COUNTER_INCREMENT" });
};

export const counterDecrement = () => async (dispatch) =>
  dispatch({ type: "POST_COUNTER_DECREMENT" });

export const counterDoubleDecrement = () => async (dispatch) => {
  dispatch({ type: "POST_COUNTER_DECREMENT" });
  dispatch({ type: "POST_COUNTER_DECREMENT" });
};
