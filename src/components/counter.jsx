import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,

    /* address: {
          street: ''
      } */
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }

  /*
  //Start of bind method. Define constructor
  constructor(props) {
    //Calls at the start of creation of object
    super(props);
    //At this point, you have access to count
    //Now call bind method
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  */
  handleIncrement() {
    //Currently, we don't have access to the state property
    //If you print out 'this', then you'll get undefined

    //Depending on how an object is called, this can reference difference objects.
    console.log("Incremented", this);
    //If it was called by object.method, then it would always return a reference to that object
    //If called by function(), returns a reference to window object, however, if strict mode is on, it returns undefined.
    //Use the bind method to solve this problem
  }
  //There is another way, instead of binding. Currently experimental
  //You can use this arrow function call to bind instead of calling the bind method
  handleIncrementv2 = () => {
    console.log("Incremented", this);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    //Note, in the onClick, we are simply referencing handleIncrement (Basically means no () at the end)
    //onClick is also case sensitive
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrementv2}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
