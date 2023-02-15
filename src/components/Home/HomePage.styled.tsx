import { styled } from "@mui/system";

export const AppHomePageWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  width: "100%",
  margin: 0,
  padding: 0,
  flex: "1 0 auto",
  overflowX: "hidden",
});

export const AppHomeDataContent = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
});

export const TopHomePageBillboardCarousel = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  padding: 0,
  margin: "0 auto",
  maxWidth: "1340px",
  minWidth: "600px",
  width: "100%",
  height: 448,
});

export const TopBillBoardCarousel = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  width: "100%",
  height: "100%",
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  position: "relative",
});

export const TopCarouselItems = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  display: "flex",
  overflow: "auto",
  overflowY: "hidden",
  scrollSnapType: "x mandatory",
  scrollSnapStop: "always",
  touchAction: "manipulation",
  overflowX: "hidden",
});

export const BillBoardBannerContainer = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  padding: 0,
  display: "flex",
  margin: "0 auto",
  position: "relative",
  width: "100%",
  maxWidth: "1340px",
  marginBottom: "48px",
});

export const CarouselInner = styled("div")({
  display: "flex",
  transition: "ease 1s",
});

export const BillboardContentBox = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  background: "#fff",
  width: "100vw",
  left: "72px",
  top: "64px",
  maxWidth: "440px",
  position: "absolute",
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  padding: "24px",
});

export const BillboardBackButton = styled("button")({
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "14px",
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  whiteSpace: "nowrap",
  height: "40px",
  color: "#fff",
  backgroundColor: "#1c1d1f",
  minWidth: "auto",
  padding: "0 10px",
  width: "40px",
  borderRadius: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  border: "1px solid #6a6f73",
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  left: "16px",
  top: "200px",
});

export const BillboardForwardButton = styled("button")({
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "14px",
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  whiteSpace: "nowrap",
  height: "40px",
  color: "#fff",
  backgroundColor: "#1c1d1f",
  minWidth: "auto",
  padding: "0 10px",
  width: "40px",
  borderRadius: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  border: "1px solid #6a6f73",
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  right: "16px",
  top: "200px",
});

export const CourseDiscoveryContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  width: "100%",
  maxWidth: "1340px",
  marginRight: "auto",
  marginLeft: "auto",
  paddingRight: "24px",
  paddingLeft: "24px",
  paddingBottom: "48px",
  paddingTop: 0,
  flexGrow: 1,
  cursor: "pointer",
});

export const CourseCardHeaderTitle = styled("h2")({
  display: "flex",
  alignItems: "center",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  //   maxWidth: "600px",
  width: "600px",
  height: 40,
  marginBottom: "24px",
  fontFamily:
    "SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: 1.25,
  letterSpacing: "0.5px",
});

export const ViewedCourseContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  width: "100%",
});

export const ViewedUnitCourseDetails = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  width: "100%",
});

export const ViewedCourseHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  marginBottom: "16px",
  width: "100%",
});

export const CourseViewedTitle = styled("h2")({
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  width: "100%",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-.02rem",
  fontSize: "24px",
  maxWidth: "800px",
});

export const CourseViewAnchorTag = styled("a")({
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineheight: 1.2,
  letterSpacing: "-.02rem",
  fontSize: "24px",
  margin: 0,
  padding: 0,
  color: "#5624d0",
  textDecoration: "none",
  cursor: "pointer",
});

export const CourseCarouselContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  position: "relative",
  width: "100%",
});

export const CourseUnitGridCarousel = styled("div")({
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "16px",
  gridAutoColumns: "calc((100% - (5 - 1) * 16px)/5)",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  width: "100%",
  margin: 0,
  padding: 0,
  overflow: "auto",
  overflowY: "hidden",
  scrollSnapType: "x mandatory",
  scrollSnapStop: "always",
  touchAction: "manipulation",
  overflowX: "hidden",
  position: "relative",
});

export const CourseCarouselBackButton = styled("button")({
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "16px",
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  height: "48px",
  color: "#fff",
  backgroundColor: "#1c1d1f",
  minWidth: "auto",
  padding: "0 12px",
  width: "48px",
  borderRadius: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  border: "1px solid #6a6f73",
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  left: "-24px",
  top: "25%",
  zIndex: "1010",
});

export const CourseCarouselForwardButton = styled("button")({
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "16px",
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  whiteSpace: "nowrap",
  height: "48px",
  color: "#fff",
  backgroundColor: "#1c1d1f",
  minWidth: "auto",
  padding: "0 12px",
  width: "48px",
  borderRadius: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  border: "1px solid #6a6f73",
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  right: "-24px",
  top: "25%",
  zIndex: 1,
});

export const CourseCarouselScrollItem = styled("div")({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  minWidth: "1px",
  height: 290.52,
  width: 245.59,
  scrollSnapAlign: "start",
});

export const ScrollItemContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  position: "relative",
  maxWidth: "375px",
  minWidth: "173px",
});

export const CourseCardImageContainer = styled("div")({
  display: "flex",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  backgroundColor: "#1c1d1f",
  border: "1px solid #d1d7dc",
  overflow: "hidden",
  position: "relative",
  height: 138.14,
  paddingBottom: "56.25%",
  width: "100%",
});

export const CourseCardImage = styled("img")({
  color: "#1c1d1f",
  aspectratio: "auto 240 / 135",
  margin: 0,
  padding: 0,
  maxWidth: "100%",
  display: "block",
  transition: "opacity linear 100ms",
  position: "absolute",
  width: "100%",
  height: "100%",
});

export const CourseCardMainContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  flex: 1,
  minWidth: "1px",
  width: "100%",
});

export const CourseTitleContainer = styled("h3")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.02rem",
  fontSize: "16px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: "4px",
  marginTop: "8px",
  width: "245.59px",
  maxWidth: "600px",
});

export const CourseTitleAnchorTag = styled("a")({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  lineHeight: 1.2,
  letterSpacing: "-0.02rem",
  fontSize: "16px",
  whiteSpace: "normal",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  fontWeight: "inherit",
  textDecoration: "none",
});

export const CourseInstructorContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  fontweight: 400,
  lineHeight: 1.4,
  fontSize: "12px",
  marginBottom: "4px",
});

export const CourseCardStarRate = styled("div")({
  display: "flex",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  marginBottom: "4px",
});

export const StarRatingContainer = styled("span")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  // width: "100%",
  width: 94.17,
});

export const CourseCardRateNum = styled("span")({
  display: "flex",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "14px",
  marginRight: "4px",
  color: "#b4690e",
});

export const StarIconContent = styled("div")({
  display: "flex",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  fill: "none",
  margin: 0,
  padding: 0,
  width: "70px",
  height: "16px",
});

export const RateIcon = styled("img")({
  display: "block",
  color: "#E5981A",
  width: "14px",
  height: "14px",
});

export const RateNumContent = styled("span")({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "12px",
  color: "#6a6f73",
  marginLeft: "4px",
});

export const PriceTextContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  flexWrap: "wrap",
  marginBottom: "4px",
  width: "100%",
});

export const CurrentPriceContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: "#1c1d1f",
  margin: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  letterSpacing: "-.2px",
  fontSize: "16px",
  lineHeight: 1,
  padding: "4px 0",
  marginRight: "8px",
  whiteSpace: "nowrap",
});

export const OriginalPriceContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: 0,
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1,
  padding: "4px 0",
  whiteSpace: "nowrap",
  color: "#6a6f73",
  marginRight: 0,
});

export const OriginalPriceText = styled("span")({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: 1,
  whiteSpace: "nowrap",
  color: "#6a6f73",
  margin: 0,
  padding: 0,
});

export const CourseBadgeContainer = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  padding: 0,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  margin: "8px 0 4px",
  gap: "4px 8px",
  width: "100%",
});

export const RecommendedCourseContainer = styled("div")({
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  marginTop: "48px",
  width: "100%",
  position: "relative",
});

/* COURSE REVIEW */
export const CourseReviewContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  paddingTop: "16px",
  paddingBottom: "16px",
  width: 340,
  border: "1px solid #d1d7dc",
  zIndex: 1,
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  backgroundColor: "#fff",
  position: "relative",
});

export const AddToCartWrapper = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  marginBottom: "8px",
  marginTop: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: 292,
});

export const AddToCartButton = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  flex: 1,
});

export const CartButton = styled("button")({
  margin: 0,
  backgroundImage: "none",
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-.02rem",
  fontSize: "16px",
  position: "relative",
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  display: "inline-flex",
  minWidth: "80px",
  padding: "0 12px",
  justifyContent: "center",
  whiteSpace: "nowrap",
  height: "48px",
  color: "#fff",
  backgroundColor: "#a435f0",
  width: "100%",
});

export const AddToWishList = styled("button")({
  margin: 0,
  backgroundImage: "none",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-.02rem",
  fontSize: "16px",
  position: "relative",
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  whiteSpace: "nowrap",
  height: "48px",
  color: "#1c1d1f",
  backgroundColor: "transparent",
  border: "1px solid #1c1d1f",
  minWidth: "auto",
  padding: "0 12px",
  width: "48px",
  borderRadius: "50%",
});

export const CourseViewContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  flex: 1,
  minWidth: "1px",
  // width: "100%",
  width: 292,
});

export const CourseReviewTitle = styled("h3")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.02rem",
  fontSize: "20px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: "4px",
  marginTop: "8px",
  width: "100%",
  // maxWidth: "600px",
});

export const CourseReviewTitleAnchorTag = styled("a")({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  lineHeight: 1.2,
  letterSpacing: "-0.02rem",
  fontSize: "20px",
  whiteSpace: "normal",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  fontWeight: "inherit",
  textDecoration: "none",
});

export const UpdatedCourseReview = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  letterSpacing: "-.02rem",
  marginTop: 8,
  marginBottom: 8,
  color: "#1F6055",
  width: "100%",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  fontweight: 400,
  lineHeight: 1.4,
  fontSize: "12px",
});

export const Span = styled("span")({
  fontWeight: 700,
  marginLeft: "2px",
});

export const TotalHoursContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  letterSpacing: "-.02rem",
  marginTop: "8px",
  color: "#7E8386",
  width: "100%",
  whiteSpace: "nowrap",
  fontweight: 400,
  fontSize: "12px",
});

export const TotalHoursContent = styled("div")({
  fontweight: 400,
  fontSize: "12px",
});

export const RoundManualRecordIcon = styled("img")({
  fontSize: "94px",
  marginLeft: "4px",
  marginRight: "4px",
});

export const CourseReviewIncentives = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: "-0.02rem",
  fontSize: "14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: "4px",
  marginTop: "8px",
  width: "100%",
});

export const IncentivesText = styled("div")({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  lineHeight: 1.2,
  letterSpacing: "-0.02rem",
  fontSize: "15px",
  whiteSpace: "normal",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  fontWeight: "inherit",
  textDecoration: "none",
});

export const BlockListItem = styled("div")({
  margin: 0,
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  textAlign: "left",
  letterSpacing: "normal",
  whiteSpace: "normal",
  padding: "4px 0",
  color: "#1c1d1f",
});

export const CheckMark = styled("img")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  textAlign: "left",
  whiteSpace: "normal",
  margin: 0,
  padding: 0,
  display: "flex",
  flexShrink: 0,
  width: "14px",
  height: "14px",
  color: "#1c1d1f",
  objectFit: "contain",
});

export const BlockListItemContent = styled("p")({
  listStyle: "none",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "14px",
  textAlign: "left",
  letterSpacing: "-0.02rem",
  whiteSpace: "normal",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  flex: 1,
  minWidth: "1px",
  width: "100%",
  marginLeft: "16px",
});
