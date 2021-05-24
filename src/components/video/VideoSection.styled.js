import styled from "styled-components";

export const VideoSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.primary};
  padding-top: 64px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    /* padding-bottom: 64px; */
  }
`;

export const VideoImgWrapper = styled.div`
  position: relative;
  transform: translateY(50%);
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}px) {
    transform: translateY(56px);
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}px) {
    transform: translateY(35%);
  }
`;

export const VideoImg = styled.img`
  width: 100%;
`;

export const VideoBtnEclipse = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(254, 244, 230, 0.8);
  backdrop-filter: blur(10px);
`;

export const VideoBtnIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
