import React from "react";
import { NavLink } from "react-router-dom";

export const UserRoutes = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="search">Search</NavLink>
      <NavLink to="login">Login</NavLink>

      <Routes>
        <Route path="products" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </>
  );
};
