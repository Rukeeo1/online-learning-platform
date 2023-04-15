import * as React from "react";
import {
  HeaderDropdown,
  HeaderAnimationWrapper,
  HeaderPopover,
  HeaderMenu,
  HeaderMenuContent,
  IconMenuTitle,
  IconMenuButton,
} from "./header.styled";

interface componentProps {
  title1: string;
  title2: string;
}

export const CartMenuDropdown: React.FunctionComponent<componentProps> = (
  props
) => {
  const { title1, title2 } = props;

  return (
    <HeaderDropdown>
      <HeaderAnimationWrapper>
        <HeaderPopover>
          <HeaderMenu>
            <HeaderMenuContent>
              <IconMenuTitle>
                <span>{title1}</span>
              </IconMenuTitle>

              <IconMenuButton>
                <span>{title2}</span>
              </IconMenuButton>
            </HeaderMenuContent>
          </HeaderMenu>
        </HeaderPopover>
      </HeaderAnimationWrapper>
    </HeaderDropdown>
  );
};
