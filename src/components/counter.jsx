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

  handleIncrement() {
    //Currently, we don't have access to the state property
    //If you print out 'this', then you'll get undefined
    console.log("Incremented", this);
  }

  render() {
    //Note, in the onClick, we are simply referencing handleIncrement (Basically means no () at the end)
    //onClick is also case sensitive
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
