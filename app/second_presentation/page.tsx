import { CountIndexProvider } from "./context/IndexGlobal";
import MainSlide from "./components/mainSlide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Raspberry Pi',
}


function SecondPresentation() {
  return (
    <CountIndexProvider>
      <MainSlide />
    </CountIndexProvider>
  )
}

export default SecondPresentation;
