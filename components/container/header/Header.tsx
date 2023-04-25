"use client";
import React from "react";
import Search from "./Search";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="root header ">
      <div className="layout gap-2 df_jb_ic container ">
        <div>
          <Link href="/">
            <h1>{process.env.LOGO}</h1>
          </Link>
        </div>
        <div></div>
        <div className="df_jc_ic gap-2">
          <Search />
          <button onClick={() => signIn()} className="btn-login">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
