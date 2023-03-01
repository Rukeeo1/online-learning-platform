import * as React from "react";
import {
  LinkBarContainer,
  LinkBarCategories,
  LinkBarList,
  LinkBarListContent,
  LinkBarNavButton,
  LinkBarText,
  HeaderButton,
  HeaderButtonAchor,
  Paragraph,
  Dropdown,
} from "./header.styled";

interface linkBarProps {}

const Component1 = ({ title }: any) => (
  <div>
    {title}{" "}
    <HeaderButton>
      <HeaderButtonAchor
        sx={{
          backgroundColor: "#1c1d1f",
        }}
      >
        <Paragraph
          sx={{
            color: "#FFFFFF",
            fontWeight: 700,
          }}
        >
          Sign up
        </Paragraph>
      </HeaderButtonAchor>
    </HeaderButton>
  </div>
);

const linkItems = [
  {
    title: "Development",
    dropdown: () => <Component1 title="Business" />,
  },
  {
    title: "Business",
    dropdown: () => <Component1 title="Teach on Udemy" />,
  },
  {
    title: "Finance & Accounting",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "IT & Software",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Office Productivity",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Personal Development",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Design",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Marketing",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Health & Fitness",
    dropdown: () => <Component1 title="My learning" />,
  },
  {
    title: "Music",
    dropdown: () => <Component1 title="My learning" />,
  },
];

export const LinkBar: React.FunctionComponent<linkBarProps> = (props) => {
  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

  return (
    <LinkBarContainer>
      <LinkBarCategories>
        {linkItems.map((item, index) => (
          <div key={index}>
            <LinkBarList>
              <LinkBarListContent>
                <LinkBarNavButton
                  onMouseEnter={() => toggleDropDown(index)}
                  onMouseLeave={() => toggleDropDown(null)}
                >
                  <LinkBarText>{item.title}</LinkBarText>
                </LinkBarNavButton>
              </LinkBarListContent>
            </LinkBarList>

            {dropDownToShow === index ? (
              <Dropdown>{<item.dropdown />}</Dropdown>
            ) : null}
          </div>
        ))}
      </LinkBarCategories>
    </LinkBarContainer>
  );
};
