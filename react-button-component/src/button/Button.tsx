import * as React from "react";
import "./button.scss";

interface IButtonProps {
  variant?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  variant,
}: IButtonProps) => {
  if (variant === "outline") {
    return <button className="outline">Default</button>;
  } else if (variant === "text") {
    return <button className="text">Default</button>;
  }
  return <button>Default</button>;
};

export default Button;
