import styled, { css } from "styled-components";

import { Text } from "./../base/typography/Typography.styled";
import { Button } from "./../base/button/Button.styled";

export const FooterWrapper = styled.footer`
  background-color: #131e07;
  padding-top: 64px;
  padding-bottom: 55px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    padding-top: 89px;
    padding-bottom: 0px;
  }
`;

export const FooterText = styled(Text)`
  font-size: 18px;
  line-height: 27px;
  color: ${({ light }) => (light ? "#E5E5E5" : "#7c8176")};
  ${({ small }) =>
    small &&
    css`
      font-size: 10px;
      line-height: 15px;
    `};
`;

export const FooterInput = styled.input`
  display: block;
  border: 1px solid #7c8176;
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  background-color: transparent;
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #7c8176;
`;

export const FooterList = styled.ul`
  margin-top: 19px;
  margin-bottom: 31px;
`;

export const FooterListItem = styled(FooterText)`
  list-style-type: none;
`;

export const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ffffff;
  opacity: 0.2;
`;

export const FooterInputBtnWrapper = styled.div`
  border: 1px solid #7c8176;
  border-radius: 8px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  display: flex;

  input {
    border: none;
    background-color: transparent;
    font-family: ${({ theme }) => theme.font.sansSerif};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #7c8176;
    flex-grow: 1;
    margin-right: 20px;
  }

  ${Button} {
    font-size: 18px;
    line-height: 27px;
    padding: 4px 16px;
    flex-basis: 113px;
  }
`;
