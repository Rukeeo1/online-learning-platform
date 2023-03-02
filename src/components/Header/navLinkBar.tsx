import * as React from "react";
import {
  LinkBarContainer,
  LinkBarCategories,
  LinkBarList,
  LinkBarListContent,
  LinkBarNavButton,
  LinkBarText,
  Dropdown,
} from "./header.styled";

interface navLinkBarProps {
  linkItems: any[];
}

export const NavLinkBar: React.FunctionComponent<navLinkBarProps> = (props) => {
  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );
  const { linkItems } = props;

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

  return (
    <LinkBarContainer>
      <LinkBarCategories>
        {linkItems.map((item, index) => (
          <div key={index}>
            <LinkBarList>
              <LinkBarListContent>
                <LinkBarNavButton
                  onMouseEnter={() => toggleDropDown(index)}
                  onMouseLeave={() => toggleDropDown(null)}
                >
                  <LinkBarText>{item.title}</LinkBarText>
                </LinkBarNavButton>
              </LinkBarListContent>
            </LinkBarList>

            {dropDownToShow === index ? (
              <Dropdown>{<item.dropdown />}</Dropdown>
            ) : null}
          </div>
        ))}
      </LinkBarCategories>
    </LinkBarContainer>
  );
};
