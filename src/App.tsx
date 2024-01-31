import { styled } from "./constant/stitches.config";
import { Header, Intro, Footer } from "./sections";

export default function App() {
  return (
    <Main>
      <Header />
      <Intro />
      <Greedy />
      <Footer />
    </Main>
  );
}
const Main = styled("main", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
const Greedy = styled("div", { flex: 1 });
