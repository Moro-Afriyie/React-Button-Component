import * as React from "react";
import "./button.scss";

interface IButtonProps {
  variant?: string;
  disableShadow?: true;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  variant,
  disableShadow,
}: IButtonProps) => {
  if (variant === "outline") {
    return <button className="outline">Default</button>;
  } else if (variant === "text") {
    return <button className="text">Default</button>;
  }
  if (disableShadow) {
    return <button className="disableShadow">Default</button>;
  }
  return <button className="default">Default</button>;
};

export default Button;
