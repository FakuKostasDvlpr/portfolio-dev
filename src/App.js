import './App.css';
import Wrapper from './Wrapper';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
        <Navbar/>
      <Wrapper>
        <Hero/>
      </Wrapper>
    </>
  );
}

export default App;
