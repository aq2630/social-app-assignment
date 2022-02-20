import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userInfo: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfoAction: (state, action) => {
      state.userInfo = action.payload;
    },
    logoutUserAction: (state) => {
      state.userInfo = null;
    },
  },
});

const { setUserInfoAction, logoutUserAction } = userSlice.actions;

export default userSlice.reducer;

export const setUserInfo = (value) => async (dispatch) => {
  dispatch(setUserInfoAction(value));
};

export const logoutUser = () => async (dispatch) => {
  dispatch(logoutUserAction());
};
