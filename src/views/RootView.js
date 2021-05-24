import { useState } from "react";

import { Navbar } from "./../components/navbar/Navbar";
import { MobileMenu } from "./../components/mobileMenu/MobileMenu";
import { Margin } from "./../components/base/Base.styled";
import { Hero } from "./../components/hero/Hero";
import { VideoSection } from "./../components/video/VideoSection";
import { CardSection } from "./../components/cardSection/CardSection";
import { Footer } from "./../components/footer/Footer";

export function RootView() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Margin mt="35px" mb="48px" mb_lg="100px" mb_xl="148px">
        <Navbar setOpenMenu={setOpenMenu} />
        {isOpenMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
      </Margin>
      <Hero />
      <VideoSection />
      <CardSection />
      <Footer />
    </>
  );
}
