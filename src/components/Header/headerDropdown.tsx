import * as React from "react";
import {
  HeaderDropdown,
  HeaderAnimationWrapper,
  HeaderPopover,
  HeaderMenu,
  HeaderMenuContent,
  HeaderMenuTitle,
  HeaderMenuButton,
} from "./header.styled";

interface componentProps {
  title1: string;
  title2: string;
  title3: string;
  buttonTitle: string;
}

export const HeaderMenuDropdown: React.FunctionComponent<componentProps> = (
  props
) => {
  const { title1, title2, title3, buttonTitle } = props;

  return (
    <HeaderDropdown>
      <HeaderAnimationWrapper>
        <HeaderPopover>
          <HeaderMenu>
            <HeaderMenuContent>
              <HeaderMenuTitle>
                <span>{title1}</span>
                <span>{title2}</span>
                <span>{title3}</span>
              </HeaderMenuTitle>

              <HeaderMenuButton>
                <span>{buttonTitle}</span>
              </HeaderMenuButton>
            </HeaderMenuContent>
          </HeaderMenu>
        </HeaderPopover>
      </HeaderAnimationWrapper>
    </HeaderDropdown>
  );
};
