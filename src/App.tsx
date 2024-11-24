import { styled } from "./constant/stitches.config";
import { Header, Intro, Footer } from "./section";
import { Projects } from "./section/Project";

export default function App() {
  return (
    <Main>
      <Header />
      <Intro />
      <Projects />
      <Greedy />
      <Footer />
    </Main>
  );
}
const Main = styled("main", { minHeight: "100vh" });

const Greedy = styled("div", { flex: 1 });
