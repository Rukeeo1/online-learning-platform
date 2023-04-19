import * as React from "react";
import {
  CartDropdown,
  AnimationWrapper,
  PopoverWrapper,
  DropdownMenu,
  DropdownMenuContent,
  IconMenuTitle,
  IconMenuButton,
} from "./Nav.styled";

interface CartDropdownMenuProps {
  title1: string;
  title2: string;
}

export const CartDropdownMenu: React.FunctionComponent<
  CartDropdownMenuProps
> = (props) => {
  const { title1, title2 } = props;

  console.log(title1, title2, "yhekkkoo");

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
