import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { TeachOnUdemyMenuDropdown } from "./teachOnUdemyMenuDropdown";
import { CartMenuDropdown } from "./cartMenuDropdown";

export const headerLinks = [
  {
    title: "Udemy Business",
    style: {
      color: "#fff",
      backgroundColor: "#1c1d1f",
      border: "0px",
    },
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere."
        buttonTitle="Try Udemy Business"
        buttonStyle={buttonStyle}
      />
    ),
  },

  {
    title: "Teach on Udemy",
    style: {
      color: "#fff",
      backgroundColor: "#1c1d1f",
      border: "0px",
    },
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Turn what you know into an"
        title2="opportunity and reach"
        title3="millions around the world."
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "My learning",
    style: {
      color: "#1c1d1f",
      backgroundColor: "white",
      border: "2px solid #1c1d1f",
    },
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Start learning from over"
        title2="213,000 courses today."
        title3=""
        buttonTitle="Browse now"
        buttonStyle={buttonStyle}
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

    iconDropdown: () => (
      <CartMenuDropdown
        title1="Your wishlist is empty"
        title2="Explore courses"
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
    iconDropdown: () => (
      <CartMenuDropdown title1="Your cart is empty" title2="Keep shopping" />
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
    iconDropdown: () => (
      <CartMenuDropdown title1="No notifications" title2="" />
    ),
  },
];

export const navLinks = [
  {
    title: "Development",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Business",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Finance & Accounting",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "IT & Software",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Office Productivity",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Personal Development",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Design",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Marketing",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Health & Fitness",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: "Music",
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyMenuDropdown
        title1="Get your team access to over"
        title2="19000 top Udemy courses,"
        title3="anytime, anywhere"
        buttonTitle="Learn more"
        buttonStyle={buttonStyle}
      />
    ),
  },
];
