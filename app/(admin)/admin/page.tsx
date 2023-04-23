"use client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const session = useSession();
  // console.log(session);
  // const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen items-center justify-center">
      Dashboard
    </main>
  );
};

export default Dashboard;
