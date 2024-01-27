import Header from "./components/Header/Header.tsx";
import Intro from "./views/Intro/Intro.tsx";
import Service from "./views/Service/Service.tsx";
import Project from "./views/Project/Project.tsx";
import CallAcion from "./views/CallAction/CallAction.tsx";
import About from "./views/About/About.tsx";
import Contact from "./views/ContactUs/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import TopButton from "./components/TopButton/TopButton.tsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.tsx";
import { useScroll } from "./hooks/useScroll.ts";
function App() {
  const { isScroll } = useScroll();
  return (
    <>
      <Header />
      <main>
        <article>
          <Intro />
          <Service />
          <About />
          <CallAcion />
          <Contact />
        </article>
      </main>
      <Footer />
      {isScroll ? <TopButton /> : <WhatsAppButton />}
    </>
  );
}

export default App;
