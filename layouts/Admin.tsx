"use client";
import React from "react";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { notFound } from "next/navigation";
interface Props {
  children?: React.ReactNode;
}

const Admin = ({ children }: Props) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  if (!user) {
  }
  return <div>{children}</div>;
};

export default Admin;
