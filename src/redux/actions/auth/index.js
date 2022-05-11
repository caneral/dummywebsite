export const userLogin = (data) => {
    return (dispatch) => {
      dispatch({
        type: "USER_LOGIN",
        data: data,
      });
    };
  };
  