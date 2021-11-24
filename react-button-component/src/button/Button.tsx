import * as React from "react";
import "./button.scss";
import classNames from "classnames";
import cx from "classnames";
import styles from "./button.module.scss";

interface IButtonProps {
  variant?: string;
  disableShadow?: true;
  disabled?: true;
  startIcon?: string;
  endIcon?: string;
  size?: string;
  color?: string;
}

interface IclassNames {
  default: string;
  outline: string;
  text: string;
  textdisabled: string;
  disableShadow: string;
  startIcon: string;
  endIcon: string;
  sm: string;
  md: string;
  lg: string;
  primary: string;
  secondary: string;
  danger: string;
}

const initialProps: IButtonProps = {
  variant: "",
  startIcon: "",
  endIcon: "",
  size: "",
  color: "",
};

const Button: React.FunctionComponent<IButtonProps> = ({
  variant = "",
  disableShadow,
  disabled,
  startIcon = "",
  endIcon = "",
  size = "",
  color = "default",
}: IButtonProps) => {
  if (variant === "outline") {
    return <button className={styles["outline"]}>Default</button>;
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
    return <button className="secondary">Secondary</button>;
  } else if (color === "danger") {
    return <button className="danger">Danger</button>;
  }

  const _className = cx(
    styles[size],
    styles.button,
    styles[variant],
    {
      [styles.disabled]: disabled,
      [styles.disableShadow]: disableShadow,
      disabled,
    },
    styles[color]
  );

  return <button className={_className}>Default</button>;
};

export default Button;
