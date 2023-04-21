import * as React from "react";
import { Dropdown } from "./Header.styled";
import { navLinks } from "./HeaderDetails";

interface SubHeaderMenuLinkProps {}

export const SubHeaderMenuLink: React.FunctionComponent<
  SubHeaderMenuLinkProps
> = (props) => {
  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );
  const {} = props;

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

  return (
    <nav className="linkbar">
      <ul className="linkbar-categories-wrapper">
        {navLinks.map((navLink, index) => (
          <div key={index}>
            <li className="linkbar-list-wrapper">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="linkbar-anchor"
                onMouseEnter={() => toggleDropDown(index)}
                onMouseLeave={() => toggleDropDown(null)}
              >
                <span className="linkbar-text">{navLink.title}</span>
              </a>
            </li>

            {dropDownToShow === index ? (
              <Dropdown>
                {navLink.dropdown(index, {} as React.CSSProperties)}
              </Dropdown>
            ) : null}
          </div>
        ))}
      </ul>
    </nav>
  );
};
