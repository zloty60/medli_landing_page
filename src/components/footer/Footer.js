import { Container, Col, Row, Visible, Hidden } from "react-grid-system";

import {
  FooterWrapper,
  FooterText,
  FooterInput,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterLine,
  FooterInputBtnWrapper,
} from "./Footer.styled";
import { Logo } from "./../base/Logo";
import { Margin, ExtendCol } from "./../base/Base.styled";
import { Button } from "./../base/button/Button.styled";

const footerData = [
  ["Product", "Updates", "Security", "Chrome Extension"],
  ["Company", "About", "Blog", "Join Us"],
  ["Help", "Talk to Support", "Support Docs", "API Docs", "System Status"],
];

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Logo dark />
        <Margin mb="56px" />
        <Row justify="between">
          <ExtendCol xs={12} lg={6} xl={5} order="2">
            <FooterText>Try Medli for free</FooterText>
            <Margin mt="16px" mb="16px">
              <Hidden xl>
                <FooterInput placeholder="Enter your email" />
              </Hidden>
              <Visible xl>
                <FooterInputBtnWrapper>
                  <input placeholder="Enter your email" />
                  <Button>Get started</Button>
                </FooterInputBtnWrapper>
              </Visible>
            </Margin>
            <Hidden xl>
              <Button>Get started</Button>
            </Hidden>
          </ExtendCol>
          <ExtendCol xs={12} lg={12} xl={6} order="1">
            <Margin mt="63px" mt_xl="0px" />
            <Row>
              {footerData.map((el) => (
                <Col xs={12} lg={4} key={el[0]}>
                  <FooterText as="h4">{el[0]}</FooterText>
                  <FooterList>
                    <FooterListItem as="li" light>
                      <FooterLink href="/#">{el[1]}</FooterLink>
                    </FooterListItem>
                    <FooterListItem as="li" light>
                      <FooterLink href="/#">{el[2]}</FooterLink>
                    </FooterListItem>
                    <FooterListItem as="li" light>
                      <FooterLink href="/#">{el[3]}</FooterLink>
                    </FooterListItem>
                    {el[4] && (
                      <FooterListItem as="li" light>
                        <FooterLink href="/#">{el[4]}</FooterLink>
                      </FooterListItem>
                    )}
                  </FooterList>
                </Col>
              ))}
            </Row>
          </ExtendCol>
        </Row>
        <Visible lg xl>
          <Margin mt="80px" />
          <FooterLine />
          <Margin mt="16px" mb="16px">
            <FooterText light small right>
              Terms & Conditions
            </FooterText>
          </Margin>
        </Visible>
      </Container>
    </FooterWrapper>
  );
}
