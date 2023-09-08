import Footer from "../base/Footer";
import Header from "../base/Header";
import Stickybar from "../base/Stickybar";
import Features from "./components/Features";
import ContentMain from "./components/Wrapper/Content/Main/ContentMain";
import ContentReview from "./components/Wrapper/Content/Review/ContentReview";
import ContentSpec from "./components/Wrapper/Content/Spec/ContentSpec";
import SideMain from "./components/Wrapper/Side/Main/SideMain";
import SideReview from "./components/Wrapper/Side/Review/SideReview";
import Wrapper from "./components/Wrapper/Wrapper";

const product = {
  id: "1",
  name: "Bausus 2.0",
  subname: "Affordable HiFi",
  bluetooth: true,
  is_4k: true,
  title:
    "Hi-Fi Bowie 2.0 - Noise cancelling - Draadloze bluetooth hoofdtelefoon - Luxurieus en stijlvol Geschikt voor Iphone en Android",
  desc: (
    <>
      Wie wilt er niet een draadloze mini camera waarmee je alles in de omgeving
      kunt (laten) opnemen via video & audio.
    </>
  ),
  rating: 4.7,
  reviews: 394,
  price: 159.95,
  off: 66,
  is_popular: true,
  types: [
    {
      id: "1",
      type: "black",
      images: [
        "images/product/1-black.png",
        "images/product/1-black.png",
        "images/product/1-black.png",
        "images/product/1-black.png",
      ],
    },
    {
      id: "2",
      type: "white",
      images: [
        "images/product/1.png",
        "images/product/2.png",
        "images/product/3.png",
        "images/product/4.png",
      ],
    },
  ],
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Stickybar />
        <Wrapper id="wrapper1">
          <ContentMain product={product} />
          <SideMain product={product} />
        </Wrapper>
        <Wrapper id="wrapper2">
          <ContentReview />
          <SideReview />
        </Wrapper>
        <Wrapper>
          <ContentSpec />
        </Wrapper>
        <Features />
      </main>
      <Footer />
    </>
  );
}
