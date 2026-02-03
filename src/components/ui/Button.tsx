import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button type="button" className="btn btn-primary">
      {props.children}
    </button>
  );
};

export default Button;
