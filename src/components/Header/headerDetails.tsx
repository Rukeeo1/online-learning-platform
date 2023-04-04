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
        title3="anytime, anywhere."
        buttonTitle="Try Udemy Business"
      />
    ),
  },

  {
    title: "Teach on Udemy",

    dropdown: () => (
      <HeaderMenuDropdown
        title1="Turn what you know into an"
        title2="opportunity and reach"
        title3="millions around the world."
        buttonTitle="Learn more"
      />
    ),
  },
  {
    title: "My learning",
    buttonTitle: "Learn more",
    dropdown: () => (
      <HeaderMenuDropdown
        title1="Start learning from over"
        title2="213,000 courses today."
        title3=""
        buttonTitle="Browse now"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
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
        buttonTitle="Learn more"
      />
    ),
  },
];
