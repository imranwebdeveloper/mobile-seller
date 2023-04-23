"use client";
import { login } from "@/redux/slices/authSlice";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  children?: React.ReactNode;
}
function AuthProvider({ children }: Props) {
  const { data }: any = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(login(data.user));
    }
  }, [data, dispatch]);
  return <div>{children}</div>;
}

export default AuthProvider;
