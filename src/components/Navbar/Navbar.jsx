import { useContext, useEffect, useState } from "react";
import { context } from "../../context/data/Context";
import { Link, useNavigate } from "react-router-dom";
import { ThemeController } from "../index";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(context);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.user?.email === "saurabhnegi@gmail.com";
  const cartItems = useSelector((state) => state.cart);

  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  }

  return (
    <div className="w-[100%] ">
      <header>
        <p className="h-10 flex items-center justify-center text-red-300 bg-black">
          Get free delivery on orders over ₹300
        </p>
      </header>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <nav className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <div className="w-4/10 flex items-center">
                <Link to="/">
                  <p className=" text-lg sm:text-2xl font-extrabold ">
                    Apna Dukaan
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:6/10 xl:w-4/10 ">
              <div className=" hidden gap-4 flex-none lg:block">
                <div className="flex gap-7 items-center align-middle">
                  <Link to="/allproducts" className="">
                    All Products
                  </Link>
                  {user && (
                    <Link to="/order" className="">
                      Order
                    </Link>
                  )}
                  {isAdmin && (
                    <Link to="/dashboard" className="">
                      Admin
                    </Link>
                  )}
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="btn btn-link no-underline "
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={handleLogin}
                      className="btn btn-link no-underline "
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
              <div className=" flex gap-7 justify-between items-center">
                <ThemeController theme={theme} toggleTheme={toggleTheme} />
                <Link className=" flex items-center" to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <span className="font-sans p-1 text-xl">
                    {cartItems.length}
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="drawer-side pt-26">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-200 min-h-full w-80 p-4">
            <div className="flex flex-col gap-4 text-lg">
              <Link to="/allproducts" className="">
                All Products
              </Link>
              {user && (
                <Link to="/order" className="">
                  Order
                </Link>
              )}
              {isAdmin && (
                <Link to="/dashboard" className="">
                  Admin
                </Link>
              )}
              {user && (
                <button
                  onClick={handleLogout}
                  className="btn btn-link no-underline "
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
