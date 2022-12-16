import Evening from "./components/Evening/Evening";
import Footer from "./components/Footer/Footer";
import Gala from "./components/Gala/Gala";
import Hero from "./components/Hero/Hero";
import Wedding from "./components/Wedding/Wedding";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Evening/>
      <Wedding/>
      <Gala/>
      <Footer/>
    </div>
  );
}

export default App;
