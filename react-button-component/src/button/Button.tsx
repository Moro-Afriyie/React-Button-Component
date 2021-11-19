import * as React from "react";
import "./button.scss";

interface IButtonProps {
  variant?: string;
  disableShadow?: true;
  disabled?: true;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  variant,
  disableShadow,
  disabled,
}: IButtonProps) => {
  if (variant === "outline") {
    return <button className="outline">Default</button>;
  } else if (variant === "text") {
    return (
      <button className={disabled ? "textdisabled" : "text"}>Default</button>
    );
  } else if (disableShadow) {
    return <button className="disableShadow">Default</button>;
  } else if (disabled) {
    return (
      <button className="disabled" disabled>
        Disabled
      </button>
    );
  }
  return (
    <button className={disabled ? "default disabled" : "default"}>
      Default
    </button>
  );
};

export default Button;
