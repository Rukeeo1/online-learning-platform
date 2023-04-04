import * as React from "react";
import {
  HeaderDropdown,
  HeaderAnimationWrapper,
  HeaderPopover,
  HeaderMenu,
  HeaderMenuContent,
  HeaderMenuTitle,
} from "./header.styled";

interface componentProps {
  title1: string;
  title2: string;
  title3: string;
}

export const HeaderMenuDropdown: React.FunctionComponent<componentProps> = (
  props
) => {
  const { title1, title2, title3 } = props;

  return (
    <HeaderDropdown>
      <HeaderAnimationWrapper>
        <HeaderPopover>
          <HeaderMenu>
            <HeaderMenuContent>
              <HeaderMenuTitle>{title1}</HeaderMenuTitle>
              <HeaderMenuTitle>{title2}</HeaderMenuTitle>
              <HeaderMenuTitle>{title3}</HeaderMenuTitle>
            </HeaderMenuContent>
          </HeaderMenu>
        </HeaderPopover>
      </HeaderAnimationWrapper>
    </HeaderDropdown>
  );
};
