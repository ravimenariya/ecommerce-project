import React from 'react';
import NavLink from './NavLink';
import { LuUsers } from "react-icons/lu";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import logo from '../../assets/logo1.png';

function SideNav() {

  return (
    <div className="w-64  text-white flex flex-col border-r" style={{ backgroundColor: 'rgb(2, 1, 17)' }}>
      <div className="h-16 flex items-center justify-center font-semibold text-xl  border-gray-200 ">

        <h1>Ecommerce Web App</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink to="/" text="HomePage" className="flex items-center space-x-2" icon={<FaHome />} />
        <NavLink to="/dashboard/products" text="Products" icon={<RiAlignItemLeftLine />} />
        <NavLink to="/dashboard/users" text="Users" icon={<LuUsers />} />


      </nav>
    </div>
  );
}

export default SideNav;
