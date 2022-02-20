import { combineReducers } from "redux";

import user from "./slices/user";
import posts from "./slices/posts";

const reducers = combineReducers({
  user,
  posts,
});

export default reducers;
