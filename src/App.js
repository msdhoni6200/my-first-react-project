import logo from "./logo.svg";
import "./App.css";
import BioData from "./biodata/BioData";
import Saurabh from "./Saurabh";
import Images from "./images";
import Ratting from "./himanshu.js/himanshu";
import Csk from "./csk";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://static.tnn.in/thumb/msid-99349469,width-1280,height-720,resizemode-75/99349469.jpg"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          saurabh kumar
        </a>
        <BioData />
      </header>
      <Saurabh></Saurabh>
      <Images></Images>
      <Ratting></Ratting>
      <Csk></Csk>
    </div>
  );
}

export default App;
