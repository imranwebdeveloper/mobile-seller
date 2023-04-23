"use client";
import React from "react";
import Search from "./Search";
// import UITheme from "@/components/common/UITheme";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className="root header ">
      <div className="layout gap-2 df_jb_ic container ">
        <div>
          <h3>Logo</h3>
          <button onClick={() => signIn()}>Login</button>
        </div>
        <div>
          <p>Navigation</p>
        </div>
        <div className="df_jc_ic gap-2">
          <Search />
          {/* <UITheme /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
