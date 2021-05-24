import styled from "styled-components";

import { Text } from "./../base/typography/Typography.styled";
import { ClearBtn } from "./../base/button/Button.styled";

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: ${({ theme }) => theme.zIndex.mobileMenu};
`;

export const MenuList = styled.ul`
  padding-left: 20px;
`;

export const MenuListItem = styled(Text)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 30px;
  line-height: 36px;
  color: #131e07;
`;

export const CloseBtn = styled(ClearBtn)`
  position: absolute;
  right: 24px;
  top: -40px;
`;

export const CloseIcon = styled.img`
  width: 23px;
`;
