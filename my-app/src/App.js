import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform'
function App() {
  return (
    <>
      <Navbar title="My App" aboutText="About Us" />
      <div className="container my-3">
        <Textform heading="Enter The Text To Analyse" />
        <br />
        <button className="btn btn-primary" onClick={textUpclass} >Convert To UpperCase</button>
      </div>
    </>
  );
}



export default App;
