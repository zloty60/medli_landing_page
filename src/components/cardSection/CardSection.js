import { Container, Row, Col, Hidden } from "react-grid-system";

import { Margin } from "./../base/Base.styled";
import { SectionHeader, Text } from "./../base/typography/Typography.styled";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardSectionWrapper,
} from "./CardSection.styled";
import frame1Src from "./../../assets/img/frame1.png";
import frame2Src from "./../../assets/img/frame2.png";
import frame3Src from "./../../assets/img/frame3.png";

const cardData = [
  {
    title: "1 FREE chat session",
    text: "Start with a free text based chat session online",
    isLast: false,
    img: frame1Src,
  },
  {
    title: "Personal Coach",
    text: "A dedicated coach to help you through your journey",
    isLast: false,
    img: frame2Src,
  },
  {
    title: "Text chat session",
    text: "An excellent way of preaparing a projects wireframe",
    isLast: true,
    img: frame3Src,
  },
];

export function CardSection() {
  return (
    <CardSectionWrapper>
      <Container>
        <Margin mt="64px" mt_sm="90px" mt_md="100px" mt_xl="150px">
          <SectionHeader>What you’re getting?</SectionHeader>
        </Margin>
        <Margin mt="36px" mb="36px" mb_md="65px" mb_lg="72px" mt_lg="16px">
          <Text width_lg="600px">
            We bring you personalized development programs that are backed by
            research and crafted from the years of experience
          </Text>
        </Margin>
        <Row gutterWidth={30}>
          {cardData.map((card) => (
            <Col xs={12} lg={4} key={card.title}>
              <Card>
                <CardImg src={card.img} />
                <Margin mt="68px" mb="16px">
                  <CardTitle as="h3">{card.title}</CardTitle>
                </Margin>
                <CardText secondary>{card.text}</CardText>
              </Card>
              <Hidden lg xl>
                {!card.isLast && <Margin mb="40px" />}
              </Hidden>
            </Col>
          ))}
        </Row>
      </Container>
    </CardSectionWrapper>
  );
}
