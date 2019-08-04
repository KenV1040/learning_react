import React, { Component } from "react";
//TODO: Make sure you fix the security vulnerability with npm audit.
class Counter extends Component {
  state = {
    count: 0,
    //State can include complex variables like below.
    /* address: {
          street: ''
      } */
    imageUrl: "https://picsum.photos/200"
  };

  formatCount() {
    //When you see this.state.count repeated, it's a perfect opportunity to use object destructuring
    //return this.state.count === 0 ? "Zero" : this.state.count;

    //this destructures the count property by picking the count object from this.state, and storing it in count.
    const { count } = this.state;
    //We can also return a jsx here instead of a string. Since jsx will be compiled through babel and turned into a react element
    //return count === 0 ? <h1>Zero</h1> :  count;
    //Get used to jsx, it's just like any other objects out there now. So you can return it, use it as a constant, etc

    return count === 0 ? "Zero" : count;
  }
  //the properties of this object will be in css camelCase notation
  styles = {
    fontSize: 90, //React will probably append px to the end
    fontWeight: "bold"
  };
  //To use this object inline, use style = {this.styles}

  render() {
    //js automatically inserts a ; if you simply type return.
    //So what js will see is return ; if you dont have anything in front of it
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
    //In attirbutes of a jsx element above, you can't use class since it's reserved. You use className.
    //Also, badge and badge-primary is a bootstrap class. m-2 is a margin class with 2 (pixels?)
    //Use classes for better performance and maintainability.

    //Have to call this.state.count to reference this object, this state.
    // Can write any expression in the curly braces
  }
}

export default Counter;
