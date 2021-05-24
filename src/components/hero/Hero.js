import { Row, Col, Container, Visible } from "react-grid-system";

import { HeroImg, HeroWrapper, HeroEllipse, HeroCounter } from "./Hero.styled";
import { Margin, ExtendCol } from "./../base/Base.styled";
import { Text, SectionHeader } from "./../base/typography/Typography.styled";
import { Button } from "./../base/button/Button.styled";
import heroSrc from "./../../assets/img/hero.png";
import ellipseSrc from "./../../assets/img/ellipse.png";

export function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <Row align="end">
          <ExtendCol xs={12} xl={7} order="2">
            <HeroImg src={heroSrc} />
          </ExtendCol>
          <ExtendCol xs={12} xl={5} order="1">
            <Margin mt="42px" mb="16px" mt_md="95px" mt_xl="0px">
              <SectionHeader as="h1">
                Check y<HeroEllipse src={ellipseSrc} />
                ur well-being
              </SectionHeader>
            </Margin>
            <Text>
              We’re sure that deciding to check on your health is a big step,
              even if it doesn’t bother in any way.
            </Text>
            <Margin mt="30px">
              <Button width_xl="300px">Get started</Button>
            </Margin>
          </ExtendCol>
        </Row>
        <Margin mt="64px" mt_lg="100px" mb_lg="40px" mt_xl="200px">
          <Row>
            <Col xs={12} lg={4}>
              <HeroCounter>230+</HeroCounter>
              <Text secondary center>
                Scientifically
                <br />
                based tests
              </Text>
            </Col>
            <Col xs={12} lg={4}>
              <Margin mt="90px" mb="90px" mt_lg="0px" mb_lg="0px">
                <HeroCounter>10,000+</HeroCounter>
                <Text secondary center>
                  Medical
                  <Visible lg xl>
                    <br />
                  </Visible>
                  <Visible xs sm md>
                    {" "}
                  </Visible>
                  recommendations
                </Text>
              </Margin>
            </Col>
            <Col xs={12} lg={4}>
              <HeroCounter>25M+</HeroCounter>
              <Text secondary center>
                Students learning
              </Text>
            </Col>
          </Row>
        </Margin>
      </HeroWrapper>
    </Container>
  );
}
