import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavContainer>
      <NavigationItem to="/">Homepage</NavigationItem>

      <NavigationItem to="/favorites">Favorites</NavigationItem>

      <NavigationItem to="/random">Random</NavigationItem>
    </NavContainer>
  );
}

const NavigationItem = styled(Link)`
  text-decoration: none;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  background-color: yellow;
`;
