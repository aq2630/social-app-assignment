import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  postsData: null,
  isError: false,
  loading: true,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      return {
        ...state,
        postsData: [action.payload, ...state.postsData],
      };
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.postsData = action.payload;
      state.status = "success";
    },
    [fetchPosts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

export const addNewPost = (post) => async (dispatch) => {
  dispatch(addPost(post));
};
