const initialState = {
  data: {},
  loading: false,
  error: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, data: action.data };
    case "USER_LOGOUT":
      return { ...state, data: action.data };

    default:
      return { ...state };
  }
};

export default auth;
