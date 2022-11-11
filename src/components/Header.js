import styled from 'styled-components';

export default function Header() {
  return (
    <AppHeader>
      <Headline>React and Morty</Headline>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background-color: purple;
  height: 10vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Headline = styled.h1`
  margin: 0;
`;
