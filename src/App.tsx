import { styled } from "./constant/stitches.config";
import { Header, Intro, Footer, Projects } from "./sections";

export default function App() {
  return (
    <Main>
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </Main>
  );
}
const Main = styled("main", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: 96,
});
const Greedy = styled("div", { flex: 1 });
