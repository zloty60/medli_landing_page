import styled, { css } from "styled-components";

export const Text = styled.p`
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: ${({ secondary }) => (secondary ? "#131E07" : "#40462f")};
  margin: 0px;
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};
  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `};
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}px) {
    ${({ center_md }) =>
      center_md &&
      css`
        text-align: center;
      `};
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    font-size: 24px;
    line-height: 36px;

    ${({ width_lg }) =>
      width_lg &&
      css`
        width: ${width_lg};
      `};
  }
`;

export const SectionHeader = styled.h2`
  font-family: ${({ theme }) => theme.font.serif};
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 58px;
  color: #131e07;
  margin: 0px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}px) {
    ${({ center_md }) =>
      center_md &&
      css`
        text-align: center;
      `};
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    font-size: 80px;
    line-height: 93px;
  }
`;
