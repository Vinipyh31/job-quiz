import React from 'react'
import cl from "./MyButton.module.scss";

type child = {
  className?: string;
  children?: string;
  type: "big" | "small";
  style?: Object;
  onClick?: () => void;
}

const MyButton = ({ children, type, style, onClick, className }: child) => {

  const buttonClass = (type === "big" ? [cl.MyBtn, cl.big].join(" ") : [cl.MyBtn, cl.small].join(" ")) + ` ${className}`;
  return (
    <button
      style={style}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default MyButton