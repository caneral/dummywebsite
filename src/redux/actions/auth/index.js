export const userLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: "USER_LOGIN",
      data: data,
    });
  };
};
export const userLogout = () => {
  return (dispatch) => {
    dispatch({
      type: "USER_LOGOUT",
      data: {},
    });
  };
};
