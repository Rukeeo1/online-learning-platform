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

interface headerProps {
  headerLinks: any[];
  headerIcons: any[];
}

export const Header: React.FunctionComponent<headerProps> = (props) => {
  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );

  const { headerLinks, headerIcons } = props;

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

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
            <FormInputField placeholder="Search for anything"></FormInputField>

            <InputSearchButton>
              <SearchIcon style={{ color: "#1c1d1f" }} />
            </InputSearchButton>
          </Form>
        </HeaderFormField>
        {headerLinks.map((link, index) => (
          <div key={index}>
            <TeachOnUdemy
              onMouseEnter={() => toggleDropDown(index)}
              onMouseLeave={() => toggleDropDown(null)}
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
              <Dropdown>{<link.dropdown />}</Dropdown>
            ) : null}
          </div>
        ))}

        {headerIcons.map((icon, index) => (
          <div key={index}>
            <CartContent>
              <CartAnchor>{<icon.linkIcon />}</CartAnchor>
            </CartContent>
          </div>
        ))}

        <HeaderUserAvatar>
          <HeaderUser>WO</HeaderUser>
        </HeaderUserAvatar>
      </HeaderContent>
    </StyledHeader>
  );
};
