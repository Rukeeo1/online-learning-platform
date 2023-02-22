import { styled } from "@mui/system";

export const StyledHeader = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  width: "100%",
  height: 72,
  fontFamily: "sans-serif",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  zIndex: 1010,
  position: "relative",

  "@media(maxWidth: 480px)": {
    width: "80%",
    backgroundColor: "red",
  },
});

export const ContentHeader = styled("div")({
  color: "#1c1d1f",
  margin: 0,
  width: "100%",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  background: "#fff",
  height: "72px",
  padding: "0 24px",
  position: "relative",
  zIndex: 1010,
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
});

export const Logo = styled("img")({
  width: 91,
  height: 34,
});

export const Nav = styled("nav")({
  display: "flex",
  alignItems: "center",
  maxWidth: 90.34,
  width: "6.49%",
  height: 48,
  color: "#1c1d1f",
  fontWeight: 400,
  lineHeight: "1.4",
  fontSize: "14px",
  margin: 0,
  padding: 0,
  position: "relative",
});

export const CategoryButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 700,
  letterSpacing: "-0.32px",
  fontSize: 14,
  position: "relative",
  border: "none",
  cursor: "pointer",
  width: "100%",
  height: 48,
  color: "#1c1d1f",
  lineHeight: 0,
  margin: "12px 0",
  padding: "0 12px",
  borderRadius: 0,
  outline: 0,
  background: "0 0",
});

export const Paragraph = styled("span")({
  fontSize: 14,
  letterSpacing: "-0.32px",
  cursor: "pointer",
  margin: 0,
  padding: 0,
  fontWeight: 400,
  lineHeight: 0,
  color: "#1c1d1f",
});

export const HeaderFormField = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#1c1d1f",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  padding: 0,
  position: "relative",
  flexGrow: 1,
  height: "48px",
  border: "1px solid #1c1d1f",
  borderRadius: "9999px",
  backgroundColor: "#f7f9fa",
  margin: "0 12px",
  width: "45.606%",
});

export const Form = styled("form")({
  color: "#1c1d1f",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "0 24px 0 0",
  flexDirection: "row-reverse",
  width: "98.93208%",
  position: "relative",
});

export const FormInputField = styled("input")({
  margin: 0,
  color: "#1c1d1f",
  fontWeight: "400",
  lineHeight: "1.4",
  fontSize: "14px",
  borderRadius: 0,
  display: "flex",
  width: "100%",
  height: "34px",
  border: 0,
  flex: 1,
  padding: "0 0 0 4px",
  backgroundColor: "transparent",
  outline: 0,
});

export const InputSearchButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "0.32px",
  fontSize: "16px",
  position: "relative",
  border: "none",
  height: "48px",
  width: "48px",
  color: "#5624d0",
  backgroundColor: "transparent",
  padding: 0,
  cursor: "not-allowed",
  opacity: 0.5,
});

export const SearchButton = styled("img")({
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.32px",
  fontSize: "16px",
  cursor: "not-allowed",
  margin: 0,
  padding: 0,
  fill: "currentColor",
  display: "flex",
  flexShrink: 0,
  width: "24px",
  height: "24px",
  color: "#1c1d1f",
});

export const UdemyBusiness = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 125.44,
  width: "9.0114%",
  height: "100%",
  color: "#1c1d1f",
  fontWeight: "400",
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  padding: 0,
  position: "relative",
});

export const UdemyBusinessAnchor = styled("a")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: " none",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.32px",
  fontSize: "16px",
  position: "relative",
  border: "none",
  cursor: "pointer",
  height: "48px",
  color: "#5624d0",
  backgroundColor: "transparent",
  margin: "12px 0",
  padding: "0 12px",
  width: "100%",
});

export const TeachOnUdemy = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 125.44,
  width: "9.0114%",
  height: "100%",
  color: "#1c1d1f",
  fontWeight: "400",
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  padding: 0,
  position: "relative",
});

export const TeachOnUdemyAnchor = styled("a")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: " none",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.32px",
  fontSize: "16px",
  position: "relative",
  border: "none",
  cursor: "pointer",
  height: "48px",
  color: "#5624d0",
  backgroundColor: "transparent",
  margin: "12px 0",
  padding: "0 12px",
  width: "100%",
});

export const CartContent = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#1c1d1f",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  padding: 0,
  position: "relative",
});

export const CartAnchor = styled("a")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.32px",
  fontSize: "16px",
  position: "relative",
  border: "none",
  cursor: "pointer",
  height: "48px",
  color: "#5624d0",
  backgroundColor: "transparent",
  padding: "0 12px",
  width: "48px",
  margin: "12px 0",
});

export const HeaderButton = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#1c1d1f",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  padding: 0,
  marginLeft: 8,
  maxWidth: 80,
  width: "5.7475%",
  height: 40,
});

export const HeaderButtonAchor = styled("button")({
  margin: 0,
  textDecoration: "none",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.32px",
  fontSize: "14px",
  position: "relative",
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  padding: "0 12px",
  justifyContent: "center",
  width: "100%",
  height: 40,
  color: "#1c1d1f",
  backgroundColor: "transparent",
  border: "1px solid #1c1d1f",
  outline: 0,
});

export const HeaderGlobeButton = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#1c1d1f",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  padding: 0,
  marginLeft: 8,
  maxWidth: 40,
  width: "2.874%",
  height: 40,
});

export const HeaderGlobeAchor = styled("button")({
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.32PX",
  fontSize: "14px",
  position: "relative",
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  height: 40,
  color: "#1c1d1f",
  backgroundColor: "transparent",
  border: "1px solid #1c1d1f;",
  minWidth: "auto",
  padding: "0 10px",
  width: "100%",
});

/* Proifile Modal */
export const ProfilePopOver = styled("div")({
  display: "flex",
  color: "#1c1d1f",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  padding: 0,
  // position: "absolute",
  zIndex: 1000,
  top: "100%",
  right: "0px",
  width: "260px",
});

export const ProfilePopOverAnimation = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  animation: "popper--pop-in--1DH37 100ms cubic-bezier(.2,0,.38,.9) forwards",
  width: "260px",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  position: "relative",
  backgroundColor: "#fff",
  border: '1px solid #d1d7dc',
  color: "#1c1d1f",
  marginTop: "4px",
});

export const PopoverInner = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  position: "relative",
  zIndex: 1,
  width: "100%",
});

export const ProfileUser = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  borderBottom: "1px solid #d1d7dc",
  color: "#1c1d1f",
  display: "flex",
  padding: "16px",
  width: "100%",
});

export const UserAvatar = styled("div")({
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-.02rem",
  fontSize: "24px",
  background: "#1c1d1f",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  objectFit: "cover",
  color: "#fff",
  width: "64px",
  height: "64px",
});

export const UserDetails = styled("div")({
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  flex: 1,
  display: "flex",
  alignItems: "center",
  marginLeft: "8px",
  minWidth: "1px",
  wordBreak: "break-word",
});

export const UserHeading = styled("div")({
  color: "#1c1d1f",
  wordBreak: "break-word",
  margin: 0,
  padding: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-.02rem",
  fontSize: "16px",
});

export const UserEmail = styled("div")({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "12px",
  display: "block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "#6a6f73",
  marginTop: "4px",
  maxWidth: "154px",
});

export const PopOverMenuItem = styled("ul")({
  fontSize: "inherit",
  fontWeight: 400,
  listStyle: "none",
  lineHeight: 1.4,
  color: "#1c1d1f",
  margin: 0,
  padding: "8px 0",
  width: "100%",
});

export const PopOverMenuList = styled("li")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  position: "relative",
  border: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  minWidth: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  height: "auto",
  textAlign: "left",
  letterSpacing: "normal",
  whiteSpace: "normal",
  color: "#1c1d1f",
  padding: "8px 16px",
});

export const PopOverMenuItemBlock = styled("ul")({
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  lineHeight: 1.4,
  color: "#1c1d1f",
  fontWeight: 400,
  listStyle: "none",
  margin: 0,
  borderTop: "1px solid #d1d7dc",
  padding: "8px 0",
  width: "100%",
});

export const LanguageMenuList = styled("li")({
  lineHeight: 1.4,
  color: "#1c1d1f",
  fontSize: "inherit",
  fontWeight: 400,
  listStyle: "none",
  margin: 0,
  padding: 0,
  paddingLeft: 0,
});

export const LanguageButton = styled("button")({
  backgroundImage: "none",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  position: "relative",
  border: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  textAlign: "left",
  letterSpacing: "normal",
  whiteSpace: "normal",
  color: "#1c1d1f",
  padding: "8px 16px",
});

export const LanguageBlockContent = styled("div")({
  listStyle: "none",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  cursor: "pointer",
  textAlign: "left",
  letterSpacing: "normal",
  whiteSpace: "normal",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  flex: 1,
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  width: "100%",
});

export const UserProfileAnchorTag = styled("a")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  margin: 0,
  textDecoration: "none",
  borderTop: "1px solid #d1d7dc",
  color: "#1c1d1f",
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
  width: "100%",
});

export const UserBusinessHeading = styled("div")({
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-.02rem",
  fontSize: "16px",
});

export const UserBusinessDescription = styled("div")({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: '14px',
  color: '#6a6f73',
  marginTop: '4px',
})