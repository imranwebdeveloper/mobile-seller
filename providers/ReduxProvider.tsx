"use client";

import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster />
      {children}
    </Provider>
  );
}
