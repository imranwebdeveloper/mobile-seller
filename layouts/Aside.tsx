"use client";
import { RxDashboard } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import AsideLink from "@/components/admin/common/AsideLink";
import AsideCollapse from "@/components/admin/common/AsideCollapse";

const Aside = () => {
  const dispatch = useDispatch();

  return (
    <aside className="flex flex-col bg-white  p-4">
      <div className="mb-4">
        <h3 className="logo">MobileSell</h3>
        {/* <img src="logo.png" alt="" className="w-full h-full px-2 " /> */}
      </div>
      <h2 className="mb-2 text-[#868eae]">MAIN MENU</h2>
      <nav className="flex  flex-1 flex-col ">
        <ul className="nav flex   flex-col gap-2">
          <AsideLink
            href="/"
            title="Dashboard"
            icon={<RxDashboard className="text-lg" />}
          />

          <AsideCollapse
            title="Mobile"
            icon={<HiOutlineDevicePhoneMobile className="text-xl" />}
          >
            <AsideLink href="/mobile/all" title="All Model" />
            <AsideLink href="/mobile/add" title=" Add New " />
          </AsideCollapse>
          <li
            className="flex cursor-pointer items-center gap-4 py-2"
            onClick={() => dispatch(logout())}
          >
            <span className="text-xl">
              <MdLogout />
            </span>
            <button> Logout</button>
          </li>
        </ul>
      </nav>
      <div></div>
    </aside>
  );
};

export default Aside;
