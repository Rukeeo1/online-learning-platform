import * as React from "react";
import {
  Logo,
  HeaderContent,
  Nav,
  StyledHeader,
  CategoryButton,
  HeaderSpan,
  HeaderFormField,
  Form,
  FormInputField,
  InputSearchButton,
  TeachOnUdemy,
  TeachOnUdemyAnchor,
  CartContent,
  CartAnchor,
  HeaderButton,
  HeaderButtonAchor,
  HeaderGlobeButton,
  HeaderGlobeAchor,
  HeaderUserAvatar,
  HeaderUser,
  Dropdown,
} from "./header.styled";
import UdemyLogo from "../../assets/svgs/logo-udemy.svg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

interface HeaderLink {
  style: any;
  title: string;
  dropdown: React.FunctionComponent<any>;
}

interface HeaderIcon {
  iconDropdown: React.FunctionComponent<any>;
  linkIcon: React.FunctionComponent<any>;
}

interface headerProps {
  headerLinks: HeaderLink[];
  headerIcons: HeaderIcon[];
}

export const Header: React.FunctionComponent<headerProps> = (props) => {
  const { headerLinks, headerIcons } = props;
  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );

  const [iconDropDownToShow, setIconDropDownToShow] = React.useState<
    number | null
  >(null);

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

  const toggleIconDropDown = (value: number | null) =>
    setIconDropDownToShow(value);

  return (
    <StyledHeader>
      <HeaderContent>
        <Logo src={UdemyLogo} alt="" />

        <Nav>
          <CategoryButton>
            <HeaderSpan
              sx={{
                ":hover": {
                  color: "#5623D0",
                },
              }}
            >
              Categories
            </HeaderSpan>
          </CategoryButton>
        </Nav>

        <HeaderFormField>
          <Form>
            <FormInputField placeholder="Search for anything" />

            <InputSearchButton>
              <SearchIcon style={{ color: "#1c1d1f" }} />
            </InputSearchButton>
          </Form>
        </HeaderFormField>
        {headerLinks.map((link, index) => {
          // Declare dropdown style object outside of return statement
          const dropdownStyle: React.CSSProperties = {
            position: "absolute",
            right: index === 0 ? "438px" : index === 1 ? "312px" : "214px",
          };

          const buttonStyle: React.CSSProperties = {
            color: headerLinks[index].style.color,
            border: headerLinks[index].style.border,
            backgroundColor: headerLinks[index].style.backgroundColor,
          };

          return (
            <div key={index}>
              <TeachOnUdemy
                onMouseEnter={() => {
                  toggleDropDown(index);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setTimeout(() => {
                    if (hoveredIndex === index) {
                      toggleDropDown(null);
                    }
                  }, 5000);
                }}
              >
                <TeachOnUdemyAnchor>
                  <HeaderSpan
                    sx={{
                      ":hover": {
                        color: "#5623D0",
                      },
                    }}
                  >
                    {link.title}
                  </HeaderSpan>
                </TeachOnUdemyAnchor>
              </TeachOnUdemy>

              {dropDownToShow === index ? (
                <Dropdown style={dropdownStyle}>
                  {headerLinks[index].dropdown(index, buttonStyle)}
                </Dropdown>
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
              <CartContent
                onMouseEnter={() => toggleIconDropDown(index)}
                onMouseLeave={() => toggleIconDropDown(null)}
              >
                <CartAnchor>{<icon.linkIcon />}</CartAnchor>
              </CartContent>

              {iconDropDownToShow === index ? (
                <Dropdown style={dropdownStyle}>
                  {<icon.iconDropdown />}
                </Dropdown>
              ) : null}
            </div>
          );
        })}

        <HeaderUserAvatar>
          <HeaderUser>WO</HeaderUser>
        </HeaderUserAvatar>
      </HeaderContent>
    </StyledHeader>
  );
};
