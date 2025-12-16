import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Speakers from "./components/speakers/Speakers";
import Areas from "./components/areas/Areas";
import Cronograma from "./components/calendar/Calendar";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Empresas from "./components/companie/Companie";
import Agradecimientos from "./components/gratitude/Gratitude";
import Report from "./components/report/Report";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Areas />
      <Speakers />
      <Cronograma />
      <Empresas />
      <Form />
      <Agradecimientos />
      <Report />
      <Footer />
    </>
  );
}

export default App;
