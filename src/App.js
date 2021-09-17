import './App.css';
import { Component } from 'react';
import { Greet } from './components/Greet';
import Welcome from './components/Welcom';
class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet />
        {/* <Welcome /> */}
        <div className="container">
          <div className="fl flex1">
            {/* Flex 1 */}
          </div>
          <div className="fl flex2">
            {/* Flex 2 */}
          </div>
          <div className="fl flex3">
            {/* Flex 3 */}
          </div>
          <div className="fl flex4">
            {/* Flex 4 */}
          </div>
          <div className="fl flex5">
            {/* Flex 5 */}
          </div>
          <div className="fl flex6">
            {/* Flex 6 */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
