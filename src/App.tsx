import { styled } from "./constant/stitches.config";
import { Header, Intro, Footer } from "./sections";

export default function App() {
  return (
    <div className="App">
      <Main>
        <Header />
        <Intro />
        <Footer />
      </Main>
    </div>
  );
}
const Main = styled("main", {
  width: "100vw",
  boxSizing: "border-box",
});
