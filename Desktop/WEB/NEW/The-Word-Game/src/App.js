// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextBox from './Component/TextBox';
// import RandomWordGenerator from './Component/RandomWordGenerator';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  return (
    <>
      
      <Navbar></Navbar>
      <div className="container">
      <TextBox></TextBox>
      </div>
        

    </>
  );
}

export default App;
