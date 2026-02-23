import { Home } from "./view/Home/Home";
import { About } from "./view/About/About";
import { Projects } from "./view/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import Experience from "./view/Experience/Experience";

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
