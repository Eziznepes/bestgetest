import Footer from "../base/Footer";
import Header from "../base/Header";
import Stickybar from "../base/Stickybar";
import ContentMain from "./components/ContentMain";
import SideMain from "./components/SideMain";
import Wrapper from "./components/Wrapper";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Stickybar />
        <Wrapper id={"wrapper"}>
          <ContentMain />
          <SideMain />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
