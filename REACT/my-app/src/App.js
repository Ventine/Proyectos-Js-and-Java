import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';

import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      "todos":[
        {
            "title": "task 1",
            "responsible": "task 1",
            "description": "task 1",
            "priority": "task 1"
        },
        {
            "title": "task 3",
            "responsible": "task 3",
            "description": "task 3",
            "priority": "task 3"
        },
        {
            "title": "task 2",
            "responsible": "task 2",
            "description": "task 2",
            "priority": "task 2"
        }
    ]
    }
   }
  render(){
  return (
    <div className="App">
      <Navigation />

          <img src={logo} className="App-logo" alt="logo" />


       <div className="loader">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <span> Cargando React . . . </span>          
        </div>


    </div>
  );
  }
}

export default App;
