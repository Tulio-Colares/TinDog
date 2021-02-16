import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Press from './components/Press';
import Pricing from './components/Pricing';
import CalltoAction from './components/CalltoAction';
import Footer from './components/Footer';

function App (props) {
  return (
    <div className="App">
      <section className="colored-section" id="title">

        <div class="container-fluid">
          <Navbar />

          <Title />
          
        </div>

      </section>

        <Features />

        <Testimonials />

        <Press />

        <Pricing />
    
        <CalltoAction />

        <Footer />

    </div>
  );
}

export default App;
