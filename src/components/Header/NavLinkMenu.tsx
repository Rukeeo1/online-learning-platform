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

interface NavLinkMenuProps {
  navLinks: any[];
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
              <Dropdown>{<navLink.dropdown />}</Dropdown>
            ) : null}
          </div>
        ))}
      </LinkBarCategoriesWrapper>
    </LinkBarContainer>
  );
};
