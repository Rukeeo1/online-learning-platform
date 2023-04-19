import * as React from "react";
import {
  AddToCartButton,
  AddToCartWrapper,
  AddToWishList,
  BlockListItem,
  BlockListItemContent,
  CartButton,
  CourseReviewContainer,
  CourseReviewIncentives,
  CourseReviewTitle,
  CourseReviewTitleAnchorTag,
  CourseViewContent,
  TotalHoursContent,
  IncentivesText,
  Span,
  TotalHoursContainer,
  UpdatedCourseReview,
  CheckMark,
} from "./Home.styled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import CheckMarkIcon from "../../assets/svgs/check-mark.svg";

interface CourseReviewProps {}

export const CourseReviewModal: React.FunctionComponent<CourseReviewProps> = (
  props
) => {
  const courseReviews = [
    {
      title: "IELTS Complete Preparation for (Academic & General)",
      updated: "Updated",
      updatedTime: "August 2022",
      totalHours: "18.5 total hours",
      manualRecord: `${FiberManualRecordRoundedIcon}`,
      totalContent: "All Levels",
      totalSubtitle: "Subtitles",
      incentivesText:
        "Are you taking the IELTS TEST? Then this is the only video course you need*we cover Reading,Writing,Listening & Speaking",
      firstblockListItem:
        "This video course is for students taking the Academic or General IELTS test.",
      secondblockListItem:
        "This video is a complete IELTS Full Preparation video course.",
      thirdblockListItem:
        "As this IELTS video is the newest to be added to UDEMY, you will be learning the most up to date Tips & Techniques.",
    },

    {
      title: "Willochs Ojigbo",
      updated: "Updated",
      updatedTime: "August 2022",
      totalHours: "18.5 total hours",
      manualRecord: `${FiberManualRecordRoundedIcon}`,
      totalContent: "All Levels",
      totalSubtitle: "Subtitles",
      incentivesText:
        "Are you taking the IELTS TEST? Then this is the only video course you need*we cover Reading,Writing,Listening & Speaking",
      firstblockListItem:
        "This video course is for students taking the Academic or General IELTS test.",
      secondblockListItem:
        "This video is a complete IELTS Full Preparation video course.",
      thirdblockListItem:
        "As this IELTS video is the newest to be added to UDEMY, you will be learning the most up to date Tips & Techniques.",
    },
  ];

  return (
    <>
      {courseReviews.map((review, index) => (
        <CourseReviewContainer style={{ margin: "auto" }} key={index}>
          <CourseViewContent>
            <CourseReviewTitle>
              <CourseReviewTitleAnchorTag>
                {review.title}
              </CourseReviewTitleAnchorTag>
            </CourseReviewTitle>

            <UpdatedCourseReview>
              <span>{review.updated}</span> <Span>{review.updatedTime}</Span>
            </UpdatedCourseReview>

            <TotalHoursContainer>
              <TotalHoursContent>{review.totalHours}</TotalHoursContent>

              <FiberManualRecordRoundedIcon
                sx={{
                  fontSize: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              />

              <TotalHoursContent>{review.totalContent}</TotalHoursContent>

              <FiberManualRecordRoundedIcon
                sx={{
                  fontSize: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              />

              <TotalHoursContent>{review.totalSubtitle}</TotalHoursContent>
            </TotalHoursContainer>

            <CourseReviewIncentives>
              <IncentivesText>
                <p>{review.incentivesText}</p>
              </IncentivesText>
            </CourseReviewIncentives>

            <BlockListItem>
              <CheckMark src={CheckMarkIcon} alt="" />
              <BlockListItemContent>
                {review.firstblockListItem}
              </BlockListItemContent>
            </BlockListItem>

            <BlockListItem>
              <CheckMark src={CheckMarkIcon} alt="" />
              <BlockListItemContent>
                {review.secondblockListItem}
              </BlockListItemContent>
            </BlockListItem>

            <BlockListItem>
              <CheckMark src={CheckMarkIcon} alt="" />
              <BlockListItemContent>
                {review.thirdblockListItem}
              </BlockListItemContent>
            </BlockListItem>
          </CourseViewContent>

          <AddToCartWrapper>
            <AddToCartButton>
              <CartButton
                sx={{
                  ":hover": {
                    backgroundColor: "#8711D8",
                  },
                }}
              >
                Add to cart
              </CartButton>
            </AddToCartButton>

            <div>
              <AddToWishList>
                <FavoriteBorderOutlinedIcon />
              </AddToWishList>
            </div>
          </AddToCartWrapper>
        </CourseReviewContainer>
      ))}
    </>
  );
};
