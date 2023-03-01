import * as React from "react";
import {
  Logo,
  HeaderContent,
  Nav,
  StyledHeader,
  CategoryButton,
  Paragraph,
  HeaderFormField,
  Form,
  FormInputField,
  InputSearchButton,
  UdemyBusiness,
  UdemyBusinessAnchor,
  MyLearning,
  MyLearningAnchor,
  CartContent,
  CartAnchor,
  HeaderButton,
  HeaderButtonAchor,
  HeaderGlobeButton,
  HeaderGlobeAchor,
  HeaderUserAvatar,
  HeaderUser,
} from "./header.styled";
import UdemyLogo from "../../assets/svgs/logo-udemy.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

interface headerProps {}

export const Header: React.FunctionComponent<headerProps> = (props) => {
  return (
    <StyledHeader>
      <HeaderContent>
        <Logo src={UdemyLogo} alt="" />

        <Nav>
          <CategoryButton>
            <Paragraph
              sx={{
                ":hover": {
                  color: "#5623D0",
                },
              }}
            >
              Categories
            </Paragraph>
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

        <UdemyBusiness>
          <UdemyBusinessAnchor>
            <Paragraph
              sx={{
                ":hover": {
                  color: "#5623D0",
                },
              }}
            >
              Udemy Business
            </Paragraph>
          </UdemyBusinessAnchor>
        </UdemyBusiness>

        <UdemyBusiness>
          <UdemyBusinessAnchor>
            <Paragraph
              sx={{
                ":hover": {
                  color: "#5623D0",
                },
              }}
            >
              Teach on Udemy
            </Paragraph>
          </UdemyBusinessAnchor>
        </UdemyBusiness>

        <MyLearning>
          <MyLearningAnchor>
            <Paragraph
              sx={{
                ":hover": {
                  color: "#5623D0",
                },
              }}
            >
              My learning
            </Paragraph>
          </MyLearningAnchor>
        </MyLearning>

        <CartContent>
          <CartAnchor>
            <FavoriteBorderOutlinedIcon
              sx={{
                color: "#1c1d1f",
                ":hover": {
                  color: "#5623D0",
                },
              }}
            />
          </CartAnchor>
        </CartContent>

        <CartContent>
          <CartAnchor>
            <ShoppingCartOutlinedIcon
              sx={{
                color: "#1c1d1f",
                ":hover": {
                  color: "#5623D0",
                },
              }}
            />
          </CartAnchor>
        </CartContent>

        <CartContent>
          <CartAnchor>
            <NotificationsNoneOutlinedIcon
              sx={{
                color: "#1c1d1f",
                ":hover": {
                  color: "#5623D0",
                },
              }}
            />
          </CartAnchor>
        </CartContent>

        <HeaderUserAvatar>
          <HeaderUser>WO</HeaderUser>
        </HeaderUserAvatar>

        {/* <HeaderButton>
          <HeaderButtonAchor
            sx={{
              ":hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <Paragraph
              sx={{
                color: "#1c1d1f",
                fontWeight: 700,
              }}
            >
              Log in
            </Paragraph>
          </HeaderButtonAchor>
        </HeaderButton>

        <HeaderButton>
          <HeaderButtonAchor
            sx={{
              backgroundColor: "#1c1d1f",
            }}
          >
            <Paragraph
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              Sign up
            </Paragraph>
          </HeaderButtonAchor>
        </HeaderButton> */}

        {/* <HeaderGlobeButton>
          <HeaderGlobeAchor
            sx={{
              ":hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <LanguageOutlinedIcon />
          </HeaderGlobeAchor>
        </HeaderGlobeButton> */}
      </HeaderContent>
    </StyledHeader>
  );
};
