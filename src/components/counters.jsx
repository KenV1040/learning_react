import React, { Component } from "react";
import Counter from "./counter.jsx";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
    //If key and value is the same, you can just write like above. e.g: this.setState({counter:counter})
  };

  //IMPORTANT rule. The component that owns a piece of the state, should be the one modifying it.
  render() {
    //Key will not be passed as a property (props) to Counter since it's a special property
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
