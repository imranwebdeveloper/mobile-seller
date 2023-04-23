"use client";
// import DashboardHeader from "@/components/admin/Header/DashboardHeader";
// import Aside from "@/layouts/Aside";
import { getCurrentUser } from "@/lib/session";
// import ReduxProvider from "@/providers/ReduxProvider";
import { SessionProvider } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { useEffect } from "react";
// import { authOptions } from "@/lib/auth";
interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: DashboardLayoutProps) => {
  // const user = await getCurrentUser();
  // console.log(user);

  // console.log(user);

  // useEffect(() => {
  //   const makeReq = async () => {
  //     const res = await fetch("/api/auth/session");
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   makeReq();
  // }, []);
  return (
    <div>
      {/* <SessionProvider> */}
      <main className="grid h-screen grid-cols-[280px_1fr] ">
        {/* <Aside /> */}
        {/* <section className="relative h-screen overflow-scroll px-4 scrollbar-hide "> */}
        {/* <DashboardHeader /> */}
        <section className="mb-4">{children}</section>
        {/* </section> */}
      </main>
      {/* </SessionProvider> */}
      {/* <ReduxProvider> */}

      {/* </ReduxProvider> */}
    </div>
  );
};

export default AdminLayout;
