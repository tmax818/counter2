import React from "react";
import Counter from "./Counter";
import Buttons from "./Buttons";

class Main extends React.Component {
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

  onCounterDec = () => {
    console.log(this.state.count);
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <Counter counter={this.state.count} />
        <Buttons
          onCounterInc={this.onCounterInc}
          reset={this.reset}
          onCounterDec={this.onCounterDec}
        />
      </div>
    );
  }
}

export default Main;
