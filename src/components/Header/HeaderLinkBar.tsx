import * as React from "react";
import {
  LinkBarContainer,
  LinkBarCategories,
  LinkBarList,
  LinkBarListContent,
  LinkBarNavButton,
  LinkBarText,
} from "./header.styled";

interface linkBarProps {}

export const LinkBar: React.FunctionComponent<linkBarProps> = (props) => {
  return (
    <LinkBarContainer>
      <LinkBarCategories>
        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Development</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Business</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Finance & Accounting</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>IT & Software</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Office Productivity</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Personal Development</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Design</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Marketing</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Health & Fitness</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>

        <LinkBarList>
          <LinkBarListContent>
            <LinkBarNavButton>
              <LinkBarText>Music</LinkBarText>
            </LinkBarNavButton>
          </LinkBarListContent>
        </LinkBarList>
      </LinkBarCategories>
    </LinkBarContainer>
  );
};
