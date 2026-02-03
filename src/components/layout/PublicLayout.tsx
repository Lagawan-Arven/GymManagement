import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../ui/Button";
import Navbar from "../navigation/Navbar";

const PublicLayout = () => {
  return (
    <>
      <div className="dark:bg-gray-900 min-h-screen">
        <header className=" bg-white flex h-20">
          <div className="flex gap-3 items-center ml-5">
            <img src="src/assets/react.svg" alt="" className="w-15 h-15" />
            <h2>Logo Here</h2>
          </div>

          <div className="flex-1 place-content-center">
            <Navbar />
          </div>

          <div className="flex gap-5 mr-5">
            <Button children="Sign In" />
            <Button children="Sign Up" />
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PublicLayout;
