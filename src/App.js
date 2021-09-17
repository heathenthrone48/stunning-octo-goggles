import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div class="container">
          <div class="fl flex1">
            Flex 1
          </div>
          <div class="fl flex2">
            Flex 2
          </div>
          <div class="fl flex3">
            Flex 3
          </div>
          <div class="fl flex4">
            Flex 4
          </div>
          <div class="fl flex5">
            Flex 5
          </div>
          <div class="fl flex6">
            Flex 6
          </div>
        </div>
      </div>
    );
  }
}

export default App;
