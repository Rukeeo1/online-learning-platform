import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { HeaderMenuDropdown } from "./headerDropdown";

export const headerLinks = [
  {
    title: "Udemy Business",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },

  {
    title: "Teach on Udemy",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "My learning",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
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
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Business",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Finance & Accounting",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "IT & Software",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Office Productivity",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Personal Development",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Design",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Marketing",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Health & Fitness",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
  {
    title: "Music",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
      />
    ),
  },
];
