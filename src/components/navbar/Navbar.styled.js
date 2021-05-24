import styled, { css } from "styled-components";
import { Text } from "./../base/typography/Typography.styled";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const MenuListItem = styled(Text)`
  position: relative;
  margin-right: 36px;
  cursor: pointer;
  ${({ special }) =>
    special &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      padding: 7px 31px;
      border-radius: 8px;
      margin-right: 0px;
      transition: background-color 0.5s;
      &:hover {
        background-color: #e1aa1c;
      }
    `};
`;

export const HamburgerIcon = styled.img``;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.5s ease;
  ${MenuListItem}:hover & {
    opacity: 1;
  }
`;
