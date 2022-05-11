export const setLanguage = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SET_LANGUAGE",
      data: data,
    });
  };
};
