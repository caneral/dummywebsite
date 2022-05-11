const initialState = {
  data: {username:'caneral', name:'caner', email: "asdasd@asdasd.com"},
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
