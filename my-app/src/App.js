import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  return (
    <>
      <Navbar title="My App" aboutText="About Us" />
      <div className="container">

      <Textform/>
      </div>
    </>
  );
}



export default App;
