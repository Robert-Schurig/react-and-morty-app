import styled from 'styled-components';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavElement></StyledNavElement>
        </li>
        <li>
          <StyledNavElement></StyledNavElement>
        </li>
        <li>
          <StyledNavElement></StyledNavElement>
        </li>
        <li>
          <StyledNavElement></StyledNavElement>
        </li>
      </ul>
    </nav>
  );
}

const StyledNavElement = styled.div`
  height: 40px;
  width: 40px;
  padding: 20px;
  border-radius: 50%;
  background-color: purple;
`;
