import styled from "styled-components";

import { SectionHeader, Text } from "./../base/typography/Typography.styled";

export const CardSectionWrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    padding-top: 151px;
    padding-bottom: 114px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 42px;
  padding-bottom: 45px;
  text-align: center;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    height: 100%;
  }
`;

export const CardTitle = styled(SectionHeader)`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;

export const CardText = styled(Text)`
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`;

export const CardImg = styled.img`
  width: 100%;
  max-width: 400px;
`;
