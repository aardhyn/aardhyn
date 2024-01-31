import { styled } from "./constant/stitches.config";
import { Header, Intro, Footer } from "./sections";

export default function App() {
  return (
    <Main>
      <Header />
      <Intro />
      <Footer />
    </Main>
  );
}
const Main = styled("main", {
  minHeight: "100vh",
});
