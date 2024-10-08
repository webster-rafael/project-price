import Banner from "./components/Banner";
import Clientes from "./components/Clientes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Journey from "./components/Journey";
import PerguntasFrequentes from "./components/PerguntasFrequentes";
import Planos from "./components/Planos";
import Serviços from "./components/Serviços";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <main className="relative">
      <Header />
      <Banner />
      <Clientes />
      <Serviços />
      <Journey />
      <Planos />
      <Testimonials />
      <PerguntasFrequentes />
      <Footer />
    </main>
  );
};

export default App;
