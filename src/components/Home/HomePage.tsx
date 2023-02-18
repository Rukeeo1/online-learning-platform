import * as React from "react";
import {
  TopBillBoardCarousel,
  TopCarouselItems,
  CourseUnitGridCarousel,
  CourseCarouselBackButton,
  CourseCarouselForwardButton,
  CourseDiscoveryContainer,
  TopHomePageBillboardCarousel,
  AppHomeDataContent,
  CourseViewAnchorTag,
  CourseViewedTitle,
  CourseCarouselContainer,
  AppHomePageWrapper,
  BillBoardBannerContainer,
  BillboardBackButton,
  BillboardForwardButton,
  RecommendedCourseContainer,
  ViewedCourseContainer,
  ViewedCourseHeader,
  ViewedUnitCourseDetails,
  ReviewModal,
} from "./HomePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Typography } from "@mui/material";
import { BillboardCarousel } from "./BillboardCarousel";
import firstBillboard from "/src/assets/images/first-billboard-banner.jpg";
import secondBillboard from "/src/assets/images/second-billboard-banner.jpg";
import { CourseUnitCard } from "./CourseCard";

interface HomeProps {
  courses: any[];
}

export const HomePage: React.FunctionComponent<HomeProps> = (props) => {
  const [currentBillboard, setCurrentBillboard] = React.useState(0);

  const [showReviewModal, setShowReviewModal] = React.useState<number | null>(
    null
  );

  const toggleReviewModal = (value: number) => setShowReviewModal(value);

  const { courses } = props;

  const images = [
    {
      title: "Unlock the power of your people",
      subtitle:
        "Udemy Business is trusted by 12.5K+ companies around the world",
      anchorText: "Find out what we can do for yours",
      dot: ".",
      img: `${firstBillboard}`,
    },

    {
      title: "Learning that gets you",
      content:
        "Skills for your present (and your future). Get started with us.",
      img: `${secondBillboard}`,
    },
  ];

  const handlePrev = () => {
    const index =
      currentBillboard > 0 ? currentBillboard - 1 : images.length - 1;
    setCurrentBillboard(index);
  };

  const handleNext = () => {
    const index =
      currentBillboard < images.length - 1 ? currentBillboard + 1 : 0;
    setCurrentBillboard(index);
  };

  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentBillboard((currentBillboard: number) =>
        currentBillboard < images.length - 1 ? currentBillboard + 1 : 0
      );
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <AppHomePageWrapper>
      <AppHomeDataContent>
        <TopHomePageBillboardCarousel>
          <TopBillBoardCarousel>
            <TopCarouselItems>
              <BillBoardBannerContainer>
                <BillboardCarousel
                  images={images}
                  currentBillboard={currentBillboard}
                />

                <BillboardBackButton onClick={handlePrev}>
                  <ArrowBackIosNewOutlinedIcon />
                </BillboardBackButton>

                <BillboardForwardButton onClick={handleNext}>
                  <ArrowForwardIosOutlinedIcon />
                </BillboardForwardButton>
              </BillBoardBannerContainer>
            </TopCarouselItems>
          </TopBillBoardCarousel>
        </TopHomePageBillboardCarousel>

        <CourseDiscoveryContainer>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "24px",
              lineHeight: 1.25,
              letterSpacing: "0.5px",
              width: "100%",
            }}
          >
            What to learn next
          </Typography>

          <ViewedCourseContainer>
            <ViewedUnitCourseDetails>
              <ViewedCourseHeader>
                <CourseViewedTitle>
                  <div>
                    Because you viewed{" "}
                    <CourseViewAnchorTag
                      sx={{
                        color: "secondary.contrastText",
                        ":hover": {
                          color: "#401B9C",
                        },
                      }}
                    >
                      "How to Build an Instagram Clone w/ React Native &
                      Firebase"
                    </CourseViewAnchorTag>
                  </div>
                </CourseViewedTitle>
              </ViewedCourseHeader>

              <CourseCarouselContainer>
                <CourseUnitGridCarousel>
                  {courses.slice(0, 12).map((course, index) => (
                    <div key={index}>
                      <CourseUnitCard
                        course={course}
                        index={index}
                        showReviewModal={showReviewModal}
                        toggleReviewModal={toggleReviewModal}
                      />
                    </div>
                  ))}
                </CourseUnitGridCarousel>

                <CourseCarouselBackButton>
                  <ArrowBackIosNewOutlinedIcon />
                </CourseCarouselBackButton>

                <CourseCarouselForwardButton>
                  <ArrowForwardIosOutlinedIcon />
                </CourseCarouselForwardButton>
              </CourseCarouselContainer>
            </ViewedUnitCourseDetails>
          </ViewedCourseContainer>

          <RecommendedCourseContainer>
            <ViewedUnitCourseDetails>
              <ViewedCourseHeader>
                <CourseViewedTitle>Recommended for you</CourseViewedTitle>
              </ViewedCourseHeader>

              <CourseCarouselContainer>
                {/* <CourseUnitGridCarousel>
                  {courses.slice(13, 26).map((course, index) => (
                    <div key={index}>
                      <ReviewModal>{<course.reviewModal />}</ReviewModal>
                      <CourseUnitCard course={course} />
                    </div>
                  ))}
                </CourseUnitGridCarousel> */}

                <CourseCarouselBackButton>
                  <ArrowBackIosNewOutlinedIcon />
                </CourseCarouselBackButton>

                <CourseCarouselForwardButton>
                  <ArrowForwardIosOutlinedIcon />
                </CourseCarouselForwardButton>
              </CourseCarouselContainer>
            </ViewedUnitCourseDetails>
          </RecommendedCourseContainer>
        </CourseDiscoveryContainer>
      </AppHomeDataContent>
    </AppHomePageWrapper>
  );
};
