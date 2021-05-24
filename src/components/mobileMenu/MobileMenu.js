import { Container } from "react-grid-system";

import {
  MobileMenuWrapper,
  MenuList,
  MenuListItem,
  CloseIcon,
  CloseBtn,
} from "./MobileMenu.styled";
import { Margin } from "./../base/Base.styled";

import closeSrc from "./../../assets/img/close.png";

export function MobileMenu({ setOpenMenu }) {
  return (
    <MobileMenuWrapper>
      <Container>
        <CloseBtn onClick={() => setOpenMenu(false)}>
          <CloseIcon src={closeSrc} />
        </CloseBtn>
        <Margin mt="90px" />
        <MenuList>
          <MenuListItem as="li">Home</MenuListItem>
          <MenuListItem as="li">About</MenuListItem>
          <MenuListItem as="li">Courses</MenuListItem>
          <MenuListItem as="li">News</MenuListItem>
          <MenuListItem as="li">Contact</MenuListItem>
          <MenuListItem as="li">Log in</MenuListItem>
        </MenuList>
      </Container>
    </MobileMenuWrapper>
  );
}
