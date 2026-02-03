import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className=" flex space-x-10 justify-center place-content-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/coaches">Coaches</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
