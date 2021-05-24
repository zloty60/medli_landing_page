import { LogoImg } from "./Base.styled";
import logoImg from "./../../assets/img/logo.png";
import darkLogoImg from "./../../assets/img/darkLogo.png";

export function Logo({ dark }) {
  return <LogoImg src={dark ? darkLogoImg : logoImg} />;
}
