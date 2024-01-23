import Header from "./components/Header/Header.tsx";
import Intro from "./views/Intro/Intro.tsx";
import Service from "./views/Service/Service.tsx";
import Project from "./views/Project/Project.tsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Intro />
          <Service />
        </article>
      </main>
    </>
  );
}

export default App;
