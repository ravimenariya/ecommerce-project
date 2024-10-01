import React from 'react';
import logo from '../../assets/logo1.png';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GoHeart } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Navitems from './Navitems';
import { NavData } from './data';
import { GoSignOut } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";


import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../redux/userSlice';


function Navbar() {
  const name = localStorage.getItem('name')
  const role = localStorage.getItem('role')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let handleLogout = async () => {
    try {
      console.log("in handleLogout");
      await dispatch(Logout());
      navigate('/login');
    } catch (error) {
      next(error)
    }
  }

  return (
    <header className="p-4 sticky top-0 z-50   border border-gray-200" style={{ backgroundColor: 'rgb(7, 1, 37)' }}>
      <div>
        {/* //firstrow */}
        <div className="flex justify-between items-center p-2 mb-6">
          <div className="flex items-center space-x-2">
            <TiShoppingCart style={{ height: "40px", width: "60px" }} />
            <p className="text-xl tracking-wide font-semibold">Ecommerce</p>
          </div>

          <div className="w-96">
            <input
              className="w-full text-black p-2 font-normal bg-white border border-gray-500 rounded-none"
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="flex items-center space-x-10">

            {role == "admin" && <Link to="/dashboard">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-
              2 px-4 rounded">
                Go to
                Dashboard
              </button>
            </Link>}

            <Link to="/profile">
              <AiOutlineUser />
              <span className="text-xs font-medium hover:underline transition-all duration-200">
                {name ? name : 'User'}
              </span>
            </Link>

            <Link to="/cart" className='relative'>
              <HiOutlineShoppingBag />
              <span className="text-xs font-medium hover:underline transition-all duration-200">
                Cart
              </span>
              {/* {totalQuantity > 0 ? <span className='h-4 w-4 flex top-[-11px] right-[2px] items-center text-[9px] p-1 rounded-full justify-center bg-lime-500 absolute'>{totalQuantity}</span> : null} */}

            </Link>


            <button onClick={handleLogout}>
              <GoSignOut />
              <span className="text-xs font-medium hover:underline transition-all duration-200">
                Log-Out
              </span>
            </button>

          </div>
        </div>

        {/* second */}
        <div>
          <div className="flex justify-center items-center">
            <ul className="flex space-x-10">
              {NavData.map((items) => (
                <Navitems to={items.url} text={items.text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
