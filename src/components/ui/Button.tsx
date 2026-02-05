import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-blue-500 h-[2.5rem] w-[5rem] rounded-xl hover:bg-blue-700 ">
      {props.children}
    </button>
  );
};

export default Button;
