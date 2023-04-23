import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { mobileApiSlice } from "./api/mobileApiSlice";
import { userApiSlice } from "./api/userApiSlice";
import mobileReducer from "./slices/mobileSlice";
import mobileUpdateReducer from "./slices/mobileUpdateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mobileInfo: mobileReducer,
    mobileUpdate: mobileUpdateReducer,
    [mobileApiSlice.reducerPath]: mobileApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      mobileApiSlice.middleware,
      userApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
