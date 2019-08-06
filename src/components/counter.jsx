import React, { Component } from "react";
//TODO: Make sure you fix the security vulnerability with npm audit.
class Counter extends Component {
  state = {
    count: 0,
    //State can include complex variables like below.
    /* address: {
          street: ''
      } */
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  //To add conditional rendering, you can add a helper function,like blow.
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //Else, inside the render function, add a {ifstatement && "return render state here"}
  render() {
    return (
      <div>
        {this.state.tags.length > 0 && "There are more than 0 tags"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
