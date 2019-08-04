import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    //State can include complex variables like below.
    /* address: {
          street: ''
      } */
  };

  formatCount() {
    //When you see this.state.count repeated, it's a perfect opportunity to use object destructuring
    //    return this.state.count === 0 ? "Zero" : this.state.count;

    //this destructures the count property by picking the count object from this.state, and storing it in count.
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    //js automatically inserts a ; if you simply type return.
    //So what js will see is return ; if you dont have anything in front of it
    return (
      <div>
        <span>{this.formatCount}</span>
        <button>Increment</button>
      </div>
    );
    //Have to call this.state.count to reference this object, this state.
    // Can write any expression in the curly braces
  }
}

export default Counter;
