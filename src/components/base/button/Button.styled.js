import styled, { css } from "styled-components";

export const Button = styled.button`
  display: block;
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  padding-top: 16px;
  padding-bottom: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #131e07;
  font-family: ${({ theme }) => theme.font.sansSerif};
  width: 100%;
  border-radius: 8px;
  line-height: 30px;
  cursor: pointer;
  transition: background-color 0.5s;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}px) {
    ${({ width_xl }) =>
      width_xl &&
      css`
        width: ${width_xl};
      `};
  }
  &:hover {
    background-color: #e1aa1c;
  }
`;

export const ClearBtn = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 0px;
  cursor: pointer;
`;
