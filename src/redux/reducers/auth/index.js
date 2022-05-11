const initialState = {
  data: [{username:'caneral', password: "adasd"}],
  loading: false,
  error: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "EXAMPLE_CASE":
      return { ...state, data: action.data };

    default:
      return {...state};
  }
};

export default auth;
