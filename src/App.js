
import './App.css';
import NavbarMY from "./components/NavbarMY"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbo from "./components/Jumbo"
import Head from "./components/Head"

function App() {
  return (


    <Router>
    <div className="App">

<NavbarMY /> 
      <header className="App-header">
        <Jumbo />
        <Head /> 
      </header>
    </div></Router>
  );
}

export default App;
