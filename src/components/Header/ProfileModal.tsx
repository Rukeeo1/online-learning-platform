import * as React from "react";
import { Typography } from "@mui/material";
import {
  LanguageBlockContent,
  LanguageButton,
  LanguageMenuList,
  PopoverInner,
  PopOverMenuItem,
  PopOverMenuItemBlock,
  PopOverMenuList,
  ProfilePopOver,
  ProfilePopOverAnimation,
  ProfileUser,
  UserAvatar,
  UserBusinessDescription,
  UserBusinessHeading,
  UserDetails,
  UserEmail,
  UserHeading,
  UserProfileAnchorTag,
} from "./header.styled";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface profileProps {}

export const ProfileModal: React.FunctionComponent<profileProps> = (props) => {
  const {} = props;

  return (
    <ProfilePopOver style={{ margin: "0 auto" }}>
      <ProfilePopOverAnimation>
        <PopoverInner>
          <ProfileUser>
            <UserAvatar>WO</UserAvatar>
            <UserDetails>
              <div>
                <UserHeading>Willochs Ojigbo</UserHeading>
                <UserEmail>willochs316@gmail.com</UserEmail>
              </div>
            </UserDetails>
          </ProfileUser>

          <PopOverMenuItem>
            <PopOverMenuList>My learning</PopOverMenuList>
            <PopOverMenuList>My cart</PopOverMenuList>
            <PopOverMenuList>Wishlist</PopOverMenuList>
            <PopOverMenuList>Teach on Udemy</PopOverMenuList>
          </PopOverMenuItem>

          <PopOverMenuItemBlock>
            <PopOverMenuList>Notification</PopOverMenuList>
            <PopOverMenuList>Message</PopOverMenuList>
          </PopOverMenuItemBlock>

          <PopOverMenuItemBlock>
            <PopOverMenuList>Account settings</PopOverMenuList>
            <PopOverMenuList>Payment methods</PopOverMenuList>
            <PopOverMenuList>Subscriptions</PopOverMenuList>
            <PopOverMenuList>Udemy credits</PopOverMenuList>
            <PopOverMenuList>Purchase history</PopOverMenuList>
          </PopOverMenuItemBlock>

          <PopOverMenuItemBlock>
            <LanguageMenuList>
              <LanguageButton>
                <LanguageBlockContent>
                  <span>Language</span>
                  <span>English</span>
                </LanguageBlockContent>

                <LanguageOutlinedIcon
                  sx={{
                    color: "#1c1d1f",
                    margin: 0,
                    padding: 0,
                    display: "inline-block",
                    flexShrink: 0,
                    width: "16px",
                    height: "16px",
                    marginLeft: "8px",
                  }}
                />
              </LanguageButton>
            </LanguageMenuList>
          </PopOverMenuItemBlock>

          <PopOverMenuItemBlock>
            <PopOverMenuList>Public profile</PopOverMenuList>
            <PopOverMenuList>Edit profile</PopOverMenuList>
          </PopOverMenuItemBlock>

          <PopOverMenuItemBlock>
            <PopOverMenuList>Help</PopOverMenuList>
            <PopOverMenuList>Log out</PopOverMenuList>
          </PopOverMenuItemBlock>

          <PopOverMenuItemBlock>
            <PopOverMenuList>Help</PopOverMenuList>
            <PopOverMenuList>Log out</PopOverMenuList>
          </PopOverMenuItemBlock>

          <UserProfileAnchorTag>
            <div>
              <UserBusinessHeading>Udemy Business</UserBusinessHeading>
              <UserBusinessDescription>
                Bring learning to your company
              </UserBusinessDescription>
            </div>

            <OpenInNewIcon
              sx={{
                fontSize: "14px",
                margin: 0,
                padding: 0,
                display: "inline-block",
                flexShrink: 0,
                width: "24px",
                height: "24px",
                color: "#1c1d1f",
              }}
            />
          </UserProfileAnchorTag>
        </PopoverInner>
      </ProfilePopOverAnimation>
    </ProfilePopOver>
  );
};
