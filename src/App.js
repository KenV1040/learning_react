import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  //Single source of truth. We need a single source of truth.
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    //Currently, this code won't reset. Since the counter object has it's own local state, it won't update when we setState over here.
    //So, to fix it, we need to remove the counter's object local state and move it to Counters instead.
    //This give it a single source of truth, where the source is in counters.

    //A controllled component doesn't have a state. It receives all data via props, and raises event to the parent.
  };

  handleIncrement = counter => {
    //The ... clones this.state.counters
    const counters = [...this.state.counters];
    //Do not modify the state directly. This is incredibly bad practice in react
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
    //If key and value is the same, you can just write like above. e.g: this.setState({counter:counter})
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
