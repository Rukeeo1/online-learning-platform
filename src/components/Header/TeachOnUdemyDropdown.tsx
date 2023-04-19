import * as React from "react";
import {
  CartDropdown,
  AnimationWrapper,
  PopoverWrapper,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTitle,
  DropdownMenuButton,
} from "./Header.styled";

interface componentProps {
  title1: string;
  title2: string;
  title3: string;
  buttonTitle: string;
  buttonStyle: React.CSSProperties; // Add buttonStyle prop
}

export const TeachOnUdemyDropdown: React.FunctionComponent<componentProps> = (
  props
) => {
  const { title1, title2, title3, buttonTitle, buttonStyle } = props;

  return (
    <CartDropdown>
      <AnimationWrapper>
        <PopoverWrapper>
          <DropdownMenu>
            <DropdownMenuContent>
              <DropdownMenuTitle>
                <span>{title1}</span>
                <span>{title2}</span>
                <span>{title3}</span>
              </DropdownMenuTitle>

              <DropdownMenuButton style={buttonStyle}>
                <span>{buttonTitle}</span>
              </DropdownMenuButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </PopoverWrapper>
      </AnimationWrapper>
    </CartDropdown>
  );
};
