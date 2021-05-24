import styled from "styled-components";

export const HeroWrapper = styled.section`
  padding-bottom: 64px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}px) {
    padding-bottom: 200px;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

export const HeroEllipse = styled.img`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    width: 43px;
  }
`;

export const HeroCounter = styled.span`
  font-family: ${({ theme }) => theme.font.serif};
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 94px;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  font-feature-settings: "haln" on;
`;
