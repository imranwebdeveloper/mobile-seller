"use client";

import DashboardHeader from "@/components/admin/Header/DashboardHeader";
import Aside from "@/layouts/Aside";
import AuthProvider from "@/providers/AuthProvider";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Toaster />
        <AuthProvider>
          <div className="grid h-screen grid-cols-[280px_1fr] ">
            <Aside />
            <section className="relative h-screen overflow-scroll  px-4 scrollbar-hide ">
              <DashboardHeader />
              <section className="mb-4 ">{children}</section>
            </section>
          </div>
        </AuthProvider>
      </Provider>
    </SessionProvider>
  );
};

export default AdminLayout;
