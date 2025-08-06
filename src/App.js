import './App.css';
import { Cards } from './components/Cards';
import { CarouselSlide } from './components/CarouselSlide';
import  { Header }  from './components/Header';
import { QuestionsFrequently } from './components/QuestionsFrequently ';
import { Ubication } from './components/Ubication';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <section className="header">
          <Header />
        </section>

        <section className="main">
          <CarouselSlide />
          <Cards />
          <Ubication />
          <QuestionsFrequently />
        </section>
      </div>

      <section style={{background: "#dfe1e3"}} className="footer">
        <Footer />
      </section>

      
    </div>
  );
}

export default App;
