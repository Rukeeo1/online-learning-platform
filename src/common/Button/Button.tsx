import * as React from "react";
import "./Button.css";

interface ButtonProps {
  content: string;
  className: string;
  size: "small" | "medium" | "large";
  variant: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const ButtonWithIcon: React.FunctionComponent<ButtonProps> = (props) => {
  const { content, className, size, variant, onClick, icon: Icon } = props;

  const getSizeClassName = () => {
    switch (size) {
      case "small":
        return "ud-button-icon-small-title";
      case "medium":
        return "ud-button-icon-medium-title";
      case "large":
        return "ud-button-icon-large-title";
      default:
        return "";
    }
  };

  return (
    <button
      className={`ud-button ud-button-${size} ud-button-${variant} ${className}`}
      onClick={onClick}
    >
      {Icon && <>{Icon}</>}
      <span className={getSizeClassName()}>{content}</span>
    </button>
  );
};

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { content, className, size, variant, onClick, icon: Icon } = props;

  const getSizeClassName = () => {
    switch (size) {
      case "small":
        return "ud-button-small-title";
      case "medium":
        return "ud-button-medium-title";
      case "large":
        return "ud-button-large-title";
      default:
        return "";
    }
  };

  return (
    <button
      className={`ud-button ud-button-${size} ud-button-${variant} ${className}`}
      onClick={onClick}
    >
      {!Icon && <span className={getSizeClassName()}>{content}</span>}
      {/* If Icon is defined and truthy, then it will render the ButtonWithIcon component by spreading all the props passed to the Button component as props to the ButtonWithIcon */}
      {Icon && <ButtonWithIcon {...props} />}
    </button>
  );
};
