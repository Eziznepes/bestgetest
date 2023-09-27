import Footer from "../base/Footer";
import Header from "../base/Header";
import Stickybar from "../base/Stickybar";
import ContentMain from "./components/Wrapper/Content/ContentMain";
import SideMain from "./components/Wrapper/Side/SideMain";
import Wrapper from "./components/Wrapper/Wrapper";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Stickybar />
        <Wrapper id="wrapper4">
          <ContentMain />
          <SideMain />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
