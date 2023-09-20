// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
// import UpperCaseButton from './components/UpperCaseButton';
function App() {
  return (
    <>
  <Navbar title="ritik App"></Navbar>
  <div className="main">
  <Textform title = "Convert To Upper Case  " heading = "Write Your Text Here"></Textform>
  </div>
  </>
  );
}

export default App;
