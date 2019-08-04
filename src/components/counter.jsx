import React, { Component } from "react";

class Counter extends Component {
  render() {
    //js automatically inserts a ; if you simply type return.
    //So what js will see is return ; if you dont have anything in front of it
    return (
      <div>
        <h1>Hello world</h1>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
