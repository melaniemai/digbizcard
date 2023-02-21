import './App.css';
import About from './components/About/About';
import Info from './components/Info/Info';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
