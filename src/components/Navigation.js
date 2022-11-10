import styled from 'styled-components';

export default function Navigation() {
  return (
    <nav>
      <NavList>
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
      </NavList>
    </nav>
  );
}

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;

const StyledNavElement = styled.div`
  height: 40px;
  width: 40px;
  padding: 20px;
  border-radius: 50%;
  background-color: purple;
`;
