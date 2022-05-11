const initialState = {
  data: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, data: action.data };

    default:
      return { ...state };
  }
};

export default auth;
