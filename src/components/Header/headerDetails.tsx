import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export const headerLinks = [
  {
    title: "Udemy Business",
  },
  {
    title: "Teach on Udemy",
  },
  {
    title: "My learning",
  },
];

export const headerIcons = [
  {
    linkIcon: () => (
      <FavoriteBorderOutlinedIcon
        sx={{
          color: "#1c1d1f",
          ":hover": {
            color: "#5623D0",
          },
        }}
      />
    ),
  },
  {
    linkIcon: () => (
      <ShoppingCartOutlinedIcon
        sx={{
          color: "#1c1d1f",
          ":hover": {
            color: "#5623D0",
          },
        }}
      />
    ),
  },
  {
    linkIcon: () => (
      <NotificationsNoneOutlinedIcon
        sx={{
          color: "#1c1d1f",
          ":hover": {
            color: "#5623D0",
          },
        }}
      />
    ),
  },
];
