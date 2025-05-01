import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home, Order, Cart, NoPage, Dashboard, Login, Signup, ProductInfo, AddProduct, UpdateProduct, AllProducts } from "../pages";

export const ProtectedRouteUser = ({children}) => {
  const user = JSON.parse(localStorage.getItem("user") );

  if(user){
    return children
  }else{
    <Navigate to={"/login"} />
  }
}

export const ProtectedRouteAdmin = ({children}) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const isAdmin = user.user.email === "admin@gmail.com"

  if (isAdmin) {
    return children;
  } else {
    <Navigate to={"/login"} />;
  }
}

const AllRoutes = () => {
  const pagesInfo = [
    { path: "/", element: <Home /> },
    {
      path: "/order",
      element: (
        <ProtectedRouteUser>
          <Order />
        </ProtectedRouteUser>
      ),
    },
    { path: "/cart", element: <Cart /> },
    {
      path: "/dashboard",
      element: (
        <ProtectedRouteAdmin>
          <Dashboard />
        </ProtectedRouteAdmin>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/productinfo/:id", element: <ProductInfo /> },
    { path: "allproducts", element: <AllProducts /> },
    {
      path: "/addproduct",
      element: (
        <ProtectedRouteAdmin>
          <AddProduct />
        </ProtectedRouteAdmin>
      ),
    },
    {
      path: "/updateproduct",
      element: (
        <ProtectedRouteAdmin>
          <UpdateProduct />
        </ProtectedRouteAdmin>
      ),
    },
    { path: "/*", element: <NoPage /> },
  ];
  return (
    <Routes>
      {pagesInfo.map((info, i) => (
        <Route key={i} path={info.path} element={info.element} />
      ))}
    </Routes>
  );
};

export default AllRoutes;
