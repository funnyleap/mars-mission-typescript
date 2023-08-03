import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={`Button ${className ?? ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
