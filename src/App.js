import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onCounterInc = () => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="App">
        <h1>Counter: {this.state.count}</h1>
        <button
          onClick={() => {
            this.onCounterInc();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
