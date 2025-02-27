import { Solway, Shadows_Into_Light_Two } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";

const solway = Solway({
  weight: ["300", "500", "700", "800"],
  style: "normal",
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  weight: ["400"],
  style: "normal",
});

export default function VertiGalsWebsite() {
  return (
    <div>
      <main
        className={`${solway.className} ${shadowsIntoLightTwo.className}`}
      />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
