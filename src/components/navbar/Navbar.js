import { Container, Hidden } from "react-grid-system";
import { Logo } from "./../base/Logo";
import {
  HamburgerIcon,
  NavbarWrapper,
  MenuList,
  MenuListItem,
  Dot,
} from "./Navbar.styled";
import { ClearBtn } from "./../base/button/Button.styled";
import menuIcon from "./../../assets/img/menu.png";

export function Navbar({ setOpenMenu }) {
  return (
    <Container>
      <NavbarWrapper>
        <Logo />
        <Hidden lg xl>
          <ClearBtn onClick={() => setOpenMenu(true)}>
            <HamburgerIcon src={menuIcon} />
          </ClearBtn>
        </Hidden>
        <Hidden xs sm md>
          <MenuList>
            <MenuListItem as="li" secondary>
              Home
              <Dot />
            </MenuListItem>
            <MenuListItem as="li" secondary>
              About
              <Dot />
            </MenuListItem>
            <MenuListItem as="li" secondary>
              Courses
              <Dot />
            </MenuListItem>
            <MenuListItem as="li" secondary>
              News
              <Dot />
            </MenuListItem>
            <MenuListItem as="li" secondary>
              Contact
              <Dot />
            </MenuListItem>
            <MenuListItem as="li" secondary special>
              Log in
            </MenuListItem>
          </MenuList>
        </Hidden>
      </NavbarWrapper>
    </Container>
  );
}
