import * as React from "react";
import {
  LinkBarContainer,
  LinkBarCategoriesWrapper,
  LinkBarListWrapper,
  LinkBarListItemContent,
  LinkBarNavButton,
  LinkBarText,
  Dropdown,
} from "./Header.styled";

type NavLinkMenu = {
  title: string;
  dropdown: (
    index: number,
    buttonStyle: React.CSSProperties
  ) => React.ReactNode | null; // return type includes null
};

interface NavLinkMenuProps {
  navLinks: NavLinkMenu[];
}

export const NavLinkMenu: React.FunctionComponent<NavLinkMenuProps> = (
  props
) => {
  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );
  const { navLinks } = props;

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

  return (
    <LinkBarContainer>
      <LinkBarCategoriesWrapper>
        {navLinks.map((navLink, index) => (
          <div key={index}>
            <LinkBarListWrapper>
              <LinkBarListItemContent>
                <LinkBarNavButton
                  onMouseEnter={() => toggleDropDown(index)}
                  onMouseLeave={() => toggleDropDown(null)}
                >
                  <LinkBarText>{navLink.title}</LinkBarText>
                </LinkBarNavButton>
              </LinkBarListItemContent>
            </LinkBarListWrapper>

            {dropDownToShow === index ? (
              <Dropdown>
                {navLink.dropdown(index, {} as React.CSSProperties)}
              </Dropdown>
            ) : null}
          </div>
        ))}
      </LinkBarCategoriesWrapper>
    </LinkBarContainer>
  );
};
