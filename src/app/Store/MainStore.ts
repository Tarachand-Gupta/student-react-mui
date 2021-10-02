import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/slice";
import messagingReducer from "./App/messaging/slice";
import commonReducer from "./App/common/slice";
import navigationReducer from "./App/navigation/slice";



const rootReducer = combineReducers({
  auth: authReducer,
  messaging: messagingReducer,
  common: commonReducer,
  navigation: navigationReducer,
});

const store = configureStore({
  reducer: rootReducer

});

export type RootState = ReturnType<typeof store.getState>;

export default store;
