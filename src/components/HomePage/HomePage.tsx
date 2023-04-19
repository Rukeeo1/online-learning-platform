import * as React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Typography } from "@mui/material";
import { CarouselSlider } from "./CarouselSlider";
import firstBillboard from "/src/assets/images/first-billboard-banner.jpg";
import secondBillboard from "/src/assets/images/second-billboard-banner.jpg";
import {
  AppHomeDataContent,
  AppHomePageWrapper,
  BillBoardBannerContainer,
  BillboardBackButton,
  BillboardForwardButton,
  CourseCarouselBackButton,
  CourseCarouselContainer,
  CourseCarouselForwardButton,
  CourseDiscoveryContainer,
  CourseUnitGridCarousel,
  CourseViewAnchorTag,
  RecommendedCourseContainer,
  TopBillBoardCarousel,
  TopCarouselItem,
  TopCarouselSection,
  ViewedCourseContainer,
  ViewedCourseHeader,
  ViewedCourseTitle,
  ViewedCoursesSection,
} from "./HomePage.styled";
import { CourseContentCard } from "./Course";

interface CourseInformation {
  img: string;
  title: string;
  instructor: string;
  rate: string;
  rateNum: string;
  currentPrice: string;
  originalPrice: string;
  bestSeller: string | boolean;
  starfilled: boolean;
  starhalf: boolean;
  staroutline: boolean;
  reviewModal: () => JSX.Element;
}

interface HomeProps {
  courses: CourseInformation[];
}

export const HomePage: React.FunctionComponent<HomeProps> = (props) => {
  const [currentBillboard, setCurrentBillboard] = React.useState(0);

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
    setCurrentBillboard((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentBillboard((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBillboard((prev) =>
  //       prev === images.length - 1 ? 0 : prev + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <AppHomePageWrapper>
      <AppHomeDataContent>
        <TopCarouselSection>
          <TopBillBoardCarousel>
            <TopCarouselItem>
              <BillBoardBannerContainer>
                <CarouselSlider
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
            </TopCarouselItem>
          </TopBillBoardCarousel>
        </TopCarouselSection>

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
            <ViewedCoursesSection>
              <ViewedCourseHeader>
                <ViewedCourseTitle>
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
                </ViewedCourseTitle>
              </ViewedCourseHeader>

              <CourseCarouselContainer>
                <CourseUnitGridCarousel>
                  {courses.slice(0, 12).map((course, index) => (
                    <div key={index}>
                      <CourseContentCard course={course} />
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
            </ViewedCoursesSection>
          </ViewedCourseContainer>

          {/* Recommended Section */}

          <RecommendedCourseContainer>
            <ViewedCoursesSection>
              <ViewedCourseHeader>
                <ViewedCourseTitle>Recommended for you</ViewedCourseTitle>
              </ViewedCourseHeader>

              <CourseCarouselContainer>
                {/* <CourseUnitGridCarousel>
                  {courses.slice(13, 26).map((course, index) => (
                    <div key={index}>
                      <ReviewModal>{<course.reviewModal />}</ReviewModal>
                      <CourseContentCard course={course} />
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
            </ViewedCoursesSection>
          </RecommendedCourseContainer>
        </CourseDiscoveryContainer>
      </AppHomeDataContent>
    </AppHomePageWrapper>
  );
};
