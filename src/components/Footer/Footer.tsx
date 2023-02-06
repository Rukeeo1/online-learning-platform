import * as React from "react";
import { Svgs } from "../../assets/svgs";
import {
  FooterContainer,
  FooterCopyright,
  FooterNotice,
  FooterSectionMain,
  FooterTeachSection,
  LanguageSelector,
  LanguageSelectorButton,
  LinkAndLanguageSection,
  ListLinkAnchorTag,
  ListLinkColumn,
  LogoAndCopyRight,
  LogoContainer,
  LogoImage,
  NoticeHeadingTitle,
  PartnersLogos,
  Span,
  TeachButton,
  TeachButtonAnchorTag,
  TeachHeadingTitle,
  TeachText,
} from "./Footer.styled";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LogoUdemy from "../../assets/svgs/logo-udemy-inverted.svg";

interface FooterProps {}

export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return (
    <FooterContainer>
      <FooterTeachSection>
        <div>
          <TeachHeadingTitle>Teach the world online</TeachHeadingTitle>

          <TeachText>
            Create an online video course, reach students across the globe, and
            earn money
          </TeachText>
        </div>

        <TeachButton>
          <TeachButtonAnchorTag>
            <span>Teach on Udemy</span>
          </TeachButtonAnchorTag>
        </TeachButton>
      </FooterTeachSection>

      <FooterNotice>
        <NoticeHeadingTitle>
          <Span>
            Top companies choose{" "}
            <a
              style={{
                letterSpacing: "-.02rem",
                fontSize: "19px",
                margin: 0,
                padding: 0,
                textDecoration: "none",
                fontWeight: "inherit",
                color: "#cec0fc",
              }}
            >
              Udemy Business
            </a>{" "}
            to build in-demand career skills.
          </Span>
        </NoticeHeadingTitle>

        <PartnersLogos>
          <Svgs.NasdaqLogo
            style={{
              padding: 0,
              maxWidth: "100%",
              height: "auto",
              margin: "12px 0",
              verticalAlign: "middle",
              marginRight: "24px",
            }}
          />

          <Svgs.VolkswagenLogo
            style={{
              padding: 0,
              maxWidth: "100%",
              height: "auto",
              margin: "12px 0",
              verticalAlign: "middle",
              marginRight: "24px",
            }}
          />

          <Svgs.BoxLight
            style={{
              padding: 0,
              maxWidth: "100%",
              height: "auto",
              margin: "12px 0",
              verticalAlign: "middle",
              marginRight: "24px",
            }}
          />

          <Svgs.NetappLogo
            style={{
              padding: 0,
              maxWidth: "100%",
              height: "auto",
              margin: "12px 0",
              verticalAlign: "middle",
              marginRight: "24px",
            }}
          />

          <Svgs.EventbriteLogo
            style={{
              width: "115px",
              padding: 0,
              maxWidth: "100%",
              height: "auto",
              margin: "12px 0",
            }}
          />
        </PartnersLogos>
      </FooterNotice>

      <FooterSectionMain>
        <LinkAndLanguageSection>
          <LanguageSelector>
            <LanguageSelectorButton>
              <LanguageOutlinedIcon
                style={{
                  fontWeight: 400,
                  fontSize: "16px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  margin: 0,
                  padding: 0,
                  fill: "currentColor",
                  display: "inline-block",
                  flexShrink: 0,
                  width: "20px",
                  height: "20px",
                  borderColor: "#fff",
                  color: "#fff",
                }}
              />

              <span
                style={{
                  fontWeight: 400,
                  lineHeight: 1.4,
                  fontSize: "16px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  color: "#fff",
                  margin: 0,
                  padding: 0,
                  marginLeft: "4px",
                }}
              >
                English
              </span>
            </LanguageSelectorButton>
          </LanguageSelector>

          <ListLinkColumn>
            <ListLinkAnchorTag>
              <span>Udemy Business</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Teach on Udemy</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Get the app</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>About us</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Contact us</span>
            </ListLinkAnchorTag>
          </ListLinkColumn>

          <ListLinkColumn>
            <ListLinkAnchorTag>
              <span>Careers</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Blog</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Help and Support</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Affiliate</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Investors</span>
            </ListLinkAnchorTag>
          </ListLinkColumn>

          <ListLinkColumn>
            <ListLinkAnchorTag>
              <span>Terms</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Privacy policy</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Cookie settings</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Sitemap</span>
            </ListLinkAnchorTag>
            <ListLinkAnchorTag>
              <span>Accessibility statement</span>
            </ListLinkAnchorTag>
          </ListLinkColumn>
        </LinkAndLanguageSection>

        <LogoAndCopyRight>
          <LogoContainer>
            <LogoImage src={LogoUdemy} alt="logo image" />
          </LogoContainer>

          <FooterCopyright>© 2023 Udemy, Inc.</FooterCopyright>
        </LogoAndCopyRight>
      </FooterSectionMain>
    </FooterContainer>
  );
};
