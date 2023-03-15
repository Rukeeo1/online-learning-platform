import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Component1 } from "./component";

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

export const navLinks = [
  {
    title: "Development",
    dropdown: () => <Component1 title="Business" />,
  },
  {
    title: "Business",
    dropdown: () => <Component1 title="Teach on Udemy" />,
  },
  {
    title: "Finance & Accounting",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "IT & Software",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Office Productivity",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Personal Development",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Design",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Marketing",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Health & Fitness",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Music",
    dropdown: () => <Component1 title="My learning" />,
  },
];
