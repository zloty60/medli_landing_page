import { Container, Hidden } from "react-grid-system";
import {
  VideoSectionWrapper,
  VideoImg,
  VideoBtnEclipse,
  VideoImgWrapper,
  VideoBtnIcon,
} from "./VideoSection.styled";
import { SectionHeader, Text } from "./../base/typography/Typography.styled";
import { Margin } from "./../base/Base.styled";
import { ClearBtn } from "./../base/button/Button.styled";
import womanSrc from "./../../assets/img/woman.png";
import playSrc from "./../../assets/img/play.png";

export function VideoSection() {
  return (
    <VideoSectionWrapper>
      <Container>
        <SectionHeader center_md>
          What our community
          <Hidden xs sm>
            <br />
          </Hidden>
          is saying?
        </SectionHeader>
        <Margin mt="37px" mb_lg="-10%" mt_xl="40px">
          <Text secondary center_md>
            A mission-driven company that invest
            <Hidden xs sm>
              <br />
            </Hidden>
            in and builds healthier living
          </Text>
        </Margin>
        <VideoImgWrapper>
          <VideoImg src={womanSrc} />
          <VideoBtnEclipse>
            <ClearBtn>
              <VideoBtnIcon src={playSrc} />
            </ClearBtn>
          </VideoBtnEclipse>
        </VideoImgWrapper>
      </Container>
    </VideoSectionWrapper>
  );
}
