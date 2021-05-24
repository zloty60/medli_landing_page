import styled, { css } from "styled-components";
import { Col } from "react-grid-system";

export const ExtendCol = styled(Col)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}px) {
    ${({ order }) =>
      order &&
      css`
        order: ${order};
      `};
  }
`;

export const Section = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const Margin = styled.div`
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `};
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `};
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `};
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[0]}px) {
    ${({ mt_sm }) =>
      mt_sm &&
      css`
        margin-top: ${mt_sm};
      `};
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}px) {
    ${({ mt_md }) =>
      mt_md &&
      css`
        margin-top: ${mt_md};
      `};
    ${({ mb_md }) =>
      mb_md &&
      css`
        margin-bottom: ${mb_md};
      `};
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    ${({ mb_lg }) =>
      mb_lg &&
      css`
        margin-bottom: ${mb_lg};
      `};
    ${({ mt_lg }) =>
      mt_lg &&
      css`
        margin-top: ${mt_lg};
      `};
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}px) {
    ${({ mt_xl }) =>
      mt_xl &&
      css`
        margin-top: ${mt_xl};
      `};
    ${({ mb_xl }) =>
      mb_xl &&
      css`
        margin-bottom: ${mb_xl};
      `};
  }
`;

export const LogoImg = styled.img``;
