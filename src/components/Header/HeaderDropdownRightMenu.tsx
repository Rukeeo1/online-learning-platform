import * as React from "react";

interface componentProps {
  title1: string;
  title2: string;
  title3: string;
  buttonTitle: string;
  buttonStyle: React.CSSProperties; // Add buttonStyle prop
}

export const HeaderDropdownRightMenu: React.FunctionComponent<
  componentProps
> = (props) => {
  const { title1, title2, title3, buttonTitle, buttonStyle } = props;

  return (
    <div className="cart-dropdown">
      <div className="animation-wrapper">
        <div className="popover-wrapper">
          <div className="dropdown-menu">
            <div className="dropdown-menu-content">
              <div className="dropdown-menu-title">
                <span>{title1}</span>
                <span>{title2}</span>
                <span>{title3}</span>
              </div>

              <a
                className="dropdown-menu-button"
                href="#"
                target="_blank"
                rel="noopener"
                style={buttonStyle}
              >
                <span>{buttonTitle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
