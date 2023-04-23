import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/authSlice";
import { adminApiSlice } from "./api/adminApiSlice";
import { userApiSlice } from "./api/userApiSlice";
import mobileReducer from "./slices/mobileSlice";
import mobileUpdateReducer from "./slices/mobileUpdateSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    mobileInfo: mobileReducer,
    mobileUpdate: mobileUpdateReducer,
    [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      adminApiSlice.middleware,
      userApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
