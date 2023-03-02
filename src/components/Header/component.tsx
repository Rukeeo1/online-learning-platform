import * as React from "react";
import {
  HeaderUser,
  HeaderButton,
  HeaderButtonAchor,
  HeaderSpan,
} from "./header.styled";

interface componentProps {
  title: string;
}

export const Component1: React.FunctionComponent<componentProps> = (props) => {
  const { title } = props;

  return (
    <div>
      {title}{" "}
      <HeaderButton>
        <HeaderButtonAchor
          sx={{
            backgroundColor: "#1c1d1f",
          }}
        >
          <HeaderSpan
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
            }}
          >
            Sign up
          </HeaderSpan>
        </HeaderButtonAchor>
      </HeaderButton>
    </div>
  );
};
