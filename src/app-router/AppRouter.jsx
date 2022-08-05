import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="about" element={<About />} />
          <Route path="update-blog/:id" element={<UpdateBlog />} />
          <Route path="details/:id" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
        </Routes>
      
    </div>
  );
};

export default AppRouter;