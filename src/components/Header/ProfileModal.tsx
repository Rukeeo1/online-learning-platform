import * as React from "react";
import { Typography } from "@mui/material";
import {
  PopoverInner,
  PopOverMenuItem,
  PopOverMenuList,
  ProfilePopOver,
  ProfilePopOverAnimation,
  ProfileUser,
  UserAvatar,
  UserDetails,
  UserEmail,
  UserHeading,
} from "./header.styled";

interface profileProps {}

export const ProfileModal: React.FunctionComponent<profileProps> = (props) => {
  const {} = props;

  return (
    <ProfilePopOver>
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
            <PopOverMenuList>dmdd</PopOverMenuList>
          </PopOverMenuItem>
        </PopoverInner>
      </ProfilePopOverAnimation>
    </ProfilePopOver>
  );
};
