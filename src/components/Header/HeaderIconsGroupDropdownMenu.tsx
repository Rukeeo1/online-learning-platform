import * as React from "react";
import {
  CartDropdown,
  AnimationWrapper,
  PopoverWrapper,
  DropdownMenu,
  DropdownMenuContent,
  IconMenuTitle,
  IconMenuButton,
} from "./Header.styled";

interface HeaderIconsGroupProps {
  title1: string;
  title2: string;
}

export const HeaderIconsGroup: React.FunctionComponent<
  HeaderIconsGroupProps
> = (props) => {
  const { title1, title2 } = props;

  return (
    <CartDropdown>
      <AnimationWrapper>
        <PopoverWrapper>
          <DropdownMenu>
            <DropdownMenuContent>
              <IconMenuTitle>
                <span>{title1}</span>
              </IconMenuTitle>

              <IconMenuButton>
                <span>{title2}</span>
              </IconMenuButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </PopoverWrapper>
      </AnimationWrapper>
    </CartDropdown>
  );
};
