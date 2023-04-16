import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/sidenav";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
