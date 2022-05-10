const initialState = {
  data: [],
  loading: false,
  error: "",
};

const general = (state = initialState, action) => {
  switch (action.type) {
    case "EXAMPLE_CASE":
      return { ...state, data: action.data };

    default:
      return {...state};
  }
};

export default general;
