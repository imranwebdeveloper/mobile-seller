"use client";
import Aside from "@/layouts/Aside";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  children?: React.ReactNode;
}
function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
