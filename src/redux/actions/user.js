const delay = async (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));

export const userLogin = (username) => async (dispatch) => {
  dispatch({ type: "POST_LOGIN" });
  await delay(800);
  return dispatch({ type: "POST_LOGIN_SUCCESS", data: username });
};

export const userLogout = () => async (dispatch) => {
  await delay(800);
  return dispatch({ type: "POST_LOGOUT" });
};
