import { createStore, applyMiddleware } from "redux"; // check we also require `applyMiddleware`
import thunk from "redux-thunk"; // require the Middleware
import { authReducer } from "./reducers/authReducer";

export const store = createStore(
  authReducer,
  applyMiddleware(thunk) // second parameter to `createStore`
);
