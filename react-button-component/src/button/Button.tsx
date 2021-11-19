import * as React from "react";
import "./button.scss";

interface IButtonProps {
  variant?: string;
  disableShadow?: true;
  disabled?: true;
  startIcon?: string;
  endIcon?: string;
  size?: string;
  color?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
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
  } else if (startIcon) {
    return (
      <button className="startIcon">
        <span className="material-icons">{startIcon}</span> Default
      </button>
    );
  } else if (endIcon) {
    return (
      <button className="startIcon">
        Default <span className="material-icons">{endIcon}</span>
      </button>
    );
  } else if (size === "sm") {
    return <button className="sm">Default</button>;
  } else if (size === "md") {
    return <button className="md">Default</button>;
  } else if (size === "lg") {
    return <button className="lg">Default</button>;
  } else if (color === "primary") {
    return <button className="primary">Default</button>;
  } else if (color === "secondary") {
    return <button className="secondary">Default</button>;
  } else if (color === "danger") {
    return <button className="danger">Default</button>;
  }
  return (
    <button className={disabled ? "default disabled" : "default"}>
      Default
    </button>
  );
};

export default Button;
