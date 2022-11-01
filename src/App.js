import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>

    </div>
    </BrowserRouter>
  );
}

export default App;
