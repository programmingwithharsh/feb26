import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import userSaga from "./userSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { users: userReducer },
  middleware: (g) => g().concat(saga),
});

saga.run(userSaga);

export default store;
