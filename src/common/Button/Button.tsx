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
      {Icon && <span>{Icon}</span>}
      <span className={getSizeClassName()}>{content}</span>
    </button>
  );
};
