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
} from "./HomePage.styled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import CheckMarkIcon from "../../assets/svgs/check-mark.svg";
import { Svgs } from "../../assets/svgs";

interface CourseReviewProps {}

export const CourseReview: React.FunctionComponent<CourseReviewProps> = (
  props
) => {
  return (
    <CourseReviewContainer style={{ margin: "auto" }}>
      <CourseViewContent>
        <CourseReviewTitle>
          <CourseReviewTitleAnchorTag>
            IELTS Complete Preparation for (Academic & General)
          </CourseReviewTitleAnchorTag>
        </CourseReviewTitle>

        <UpdatedCourseReview>
          <span>Updated</span> <Span>August 2022</Span>
        </UpdatedCourseReview>

        <TotalHoursContainer>
          <TotalHoursContent>18.5 total hours</TotalHoursContent>

          <FiberManualRecordRoundedIcon
            sx={{
              fontSize: "4px",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          />

          <TotalHoursContent>All Levels</TotalHoursContent>

          <FiberManualRecordRoundedIcon
            sx={{
              fontSize: "4px",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          />

          <TotalHoursContent>Subtitles</TotalHoursContent>
        </TotalHoursContainer>

        <CourseReviewIncentives>
          <IncentivesText>
            <p>
              Are you taking the IELTS TEST? Then this is the only video course
              you need*we cover Reading,Writing,Listening & Speaking
            </p>
          </IncentivesText>
        </CourseReviewIncentives>

        <BlockListItem>
          <Svgs.CheckMarkIcon />
          {/* <CheckMark src={CheckMarkIcon} alt='' /> */}
          <BlockListItemContent>
            This video course is for students taking the Academic or General
            IELTS test.
          </BlockListItemContent>
        </BlockListItem>

        <BlockListItem>
          <span>+</span>
          <BlockListItemContent>
            This video is a complete IELTS Full Preparation video course.
          </BlockListItemContent>
        </BlockListItem>

        <BlockListItem>
          <span>+</span>
          <BlockListItemContent>
            As this IELTS video is the newest to be added to UDEMY, you will be
            learning the most up to date Tips & Techniques.
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
  );
};
