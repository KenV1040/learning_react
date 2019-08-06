import React, { Component } from "react";

class Counter extends Component {
  //Difference between props and state.
  //Props include data that we give to a component,
  //State includes data that is local/private to the component
  //Props is read only
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  constructor(props) {
    super(props);
  }

  //IMPORTANT rule. The component that owns a piece of the state, should be the one modifying it.
  //So, to call onDelete, you have to raise an event
  /*
  //Start of bind method. Define constructor
  constructor(props) {
    //Calls at the start of creation of object
    super(props);
    //At this point, you have access to value
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
  handleIncrementv2 = product => {
    console.log("Incremented ", product);
    this.setState({ value: this.state.value + 1 });
    //setState is an asynchronous method. To call render() again.
  };
  render() {
    //Note, in the onClick, we are simply referencing handleIncrement (Basically means no () at the end)
    //onClick is also case sensitive
    //We need to reference the function. Can't pass arguments through it
    //In order to pass arguments when using onClick, or any event handler, you must use
    //the arrow function in order to do it.
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrementv2({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
