import styled, {StyledComponent} from 'styled-components'

export const MyButton = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const AnotherButton = styled.div`
margin-top: 1em;
color: palevioletred;

`

AnotherButton.displayName = 'MyStyledComponentRukee';