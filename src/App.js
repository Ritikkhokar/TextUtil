// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
function App() {
  return (
    <>
  <Navbar title="ritik App"></Navbar>
  <div className="container">
  <Textform title = "text Ritik" heading = "Write Your Text Here"></Textform>
  </div>
  </>
  );
}

export default App;
