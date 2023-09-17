import { CountIndexProvider } from "./context/IndexGlobal";
import MainSlide from "./components/mainSlide";
import type { Metadata } from "next";
import { FullScreenProvider } from "./context/screenContext";

export const metadata: Metadata = {
  title: "Raspberry Pi",
};

function SecondPresentation() {
  return (
    <FullScreenProvider>
      <CountIndexProvider>
        <MainSlide />
      </CountIndexProvider>
    </FullScreenProvider>
  );
}

export default SecondPresentation;
