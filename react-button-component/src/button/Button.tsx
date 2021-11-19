import * as React from "react";
import "./button.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IButtonProps {}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return <button>Default</button>;
};

export default Button;
