const initState = {
  success: true,
  loading: false,
  data: null,
  errors: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "POST_LOGIN":
      return { ...state, initState, loading: true };
    case "POST_LOGIN_SUCCESS":
      return {
        ...state,
        initState,
        loading: false,
        data: action.data,
        success: true
      };
    case "POST_LOGIN_FAILED":
      return {
        ...state,
        initState,
        loading: false,
        data: null,
        success: false,
        errors: action.error
      };

    case "POST_LOGOUT":
      return {
        ...state,
        initState,
        loading: false,
        data: null,
        success: true,
        errors: null
      };
    default:
      return state;
  }
};

export default userReducer;
