import * as React from "react";
import {
  HeaderButtonAchor,
  HeaderGlobeButton,
  HeaderGlobeAchor,
} from "./Header.styled";
import UdemyLogo from "../../assets/svgs/logo-udemy.svg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "./Header.css";
import { headerIcons, headerNavLinks } from "./HeaderDetails";

type HeaderProps = {};

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const {} = props;

  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );

  const [dropDownIconVisible, setDropDownIconVisible] = React.useState<
    number | null
  >(null);

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

  const toggleIconDropDown = (value: number | null) =>
    setDropDownIconVisible(value);

  return (
    <div className="header">
      <div className="header-content">
        <img className="logo-image" src={UdemyLogo} alt="" />

        <nav>
          <div className="category">
            <span className="category-context">Categories</span>
          </div>
        </nav>

        <div className="header-searchbar">
          <form>
            <input className="input-field" placeholder="Search for anything" />

            <button className="search-button">
              <SearchIcon className="search-icon" />
            </button>
          </form>
        </div>

        {headerNavLinks.map((link, index) => {
          // Declare dropdown style object outside of return statement
          const dropdownStyle: React.CSSProperties = {
            position: "absolute",
            right: index === 0 ? "438px" : index === 1 ? "312px" : "216px",
          };

          const buttonStyle: React.CSSProperties = {
            color: headerNavLinks[index].style.color,
            border: headerNavLinks[index].style.border,
            backgroundColor: headerNavLinks[index].style.backgroundColor,
          };

          return (
            <div key={index}>
              <div
                className="teach-on-udemy"
                onMouseEnter={() => {
                  toggleDropDown(index);
                }}
                onMouseLeave={() => {
                  toggleDropDown(null);
                }}
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="teach-on-udemy-anchor"
                >
                  <span className="teach-on-udemy-text">{link.title}</span>
                </a>
              </div>

              {dropDownToShow === index ? (
                <div style={dropdownStyle}>
                  {headerNavLinks[index].dropdown(index, buttonStyle)}
                </div>
              ) : null}
            </div>
          );
        })}

        {headerIcons.map((icon, index) => {
          // Declare dropdown style object outside of return statement
          const dropdownStyle: React.CSSProperties = {
            position: "absolute",
            right: index === 0 ? "172px" : index === 1 ? "122px" : "72px",
          };

          return (
            <div key={index}>
              <div
                className="cart"
                onMouseEnter={() => toggleIconDropDown(index)}
                onMouseLeave={() => toggleIconDropDown(null)}
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="cart-anchor"
                >
                  {<icon.linkIcon />}
                </a>
              </div>

              {dropDownIconVisible === index ? (
                <div style={dropdownStyle}>{<icon.iconDropdown />}</div>
              ) : null}
            </div>
          );
        })}

        <div className="header-user-avatar">
          <div className="header-user">WO</div>
        </div>
      </div>
    </div>
  );
};
