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
} from "./header.styled";
import UdemyLogo from "../../assets/svgs/logo-udemy.svg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

interface headerProps {
  headerLinks: any[];
  headerIcons: any[];
}

export const Header: React.FunctionComponent<headerProps> = (props) => {
  const { headerLinks, headerIcons } = props;

  return (
    // <StyledHeader>
    //   <HeaderContent>
    //     <Logo src={UdemyLogo} alt="" />

    //     <Nav>
    //       <CategoryButton>
    //         <HeaderSpan
    //           sx={{
    //             ":hover": {
    //               color: "#5623D0",
    //             },
    //           }}
    //         >
    //           Categories
    //         </HeaderSpan>
    //       </CategoryButton>
    //     </Nav>

    //     <HeaderFormField>
    //       <Form>
    //         <FormInputField placeholder="Search for anything"></FormInputField>

    //         <InputSearchButton>
    //           <SearchIcon style={{ color: "#1c1d1f" }} />
    //         </InputSearchButton>
    //       </Form>
    //     </HeaderFormField>

    //     <TeachOnUdemy>
    //       <TeachOnUdemyAnchor>
    //         <HeaderSpan
    //           sx={{
    //             ":hover": {
    //               color: "#5623D0",
    //             },
    //           }}
    //         >
    //           Udemy Business
    //         </HeaderSpan>
    //       </TeachOnUdemyAnchor>
    //     </TeachOnUdemy>

    //     <TeachOnUdemy>
    //       <TeachOnUdemyAnchor>
    //         <HeaderSpan
    //           sx={{
    //             ":hover": {
    //               color: "#5623D0",
    //             },
    //           }}
    //         >
    //           Teach on Udemy
    //         </HeaderSpan>
    //       </TeachOnUdemyAnchor>
    //     </TeachOnUdemy>

    //     <MyLearning>
    //       <MyLearningAnchor>
    //         <HeaderSpan
    //           sx={{
    //             ":hover": {
    //               color: "#5623D0",
    //             },
    //           }}
    //         >
    //           My learning
    //         </HeaderSpan>
    //       </MyLearningAnchor>
    //     </MyLearning>

    //     <CartContent>
    //       <CartAnchor>
    //         <ShoppingCartOutlinedIcon
    //           sx={{
    //             color: "#1c1d1f",
    //             ":hover": {
    //               color: "#5623D0",
    //             },
    //           }}
    //         />
    //       </CartAnchor>
    //     </CartContent>

    //     <HeaderButton>
    //       <HeaderButtonAchor
    //         sx={{
    //           ":hover": {
    //             backgroundColor: "#F5F5F5",
    //           },
    //         }}
    //       >
    //         <HeaderSpan
    //           sx={{
    //             color: "#1c1d1f",
    //             fontWeight: 700,
    //           }}
    //         >
    //           Log in
    //         </HeaderSpan>
    //       </HeaderButtonAchor>
    //     </HeaderButton>

    //     <HeaderButton>
    //       <HeaderButtonAchor
    //         sx={{
    //           backgroundColor: "#1c1d1f",
    //         }}
    //       >
    //         <HeaderSpan
    //           sx={{
    //             color: "#FFFFFF",
    //             fontWeight: 700,
    //           }}
    //         >
    //           Sign up
    //         </HeaderSpan>
    //       </HeaderButtonAchor>
    //     </HeaderButton>

    //     <HeaderGlobeButton>
    //       <HeaderGlobeAchor
    //         sx={{
    //           ":hover": {
    //             backgroundColor: "#F5F5F5",
    //           },
    //         }}
    //       >
    //         <LanguageOutlinedIcon />
    //       </HeaderGlobeAchor>
    //     </HeaderGlobeButton>
    //   </HeaderContent>
    // </StyledHeader>

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
            <TeachOnUdemy>
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
