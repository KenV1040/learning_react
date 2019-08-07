import React from "react";
import Counter from "./counter.jsx";
/* class Counters extends Component {
  //IMPORTANT rule. The component that owns a piece of the state, should be the one modifying it.
  render() {
    //Key will not be passed as a property (props) to Counter since it's a special property
    console.log("onReset", this.props.onReset);
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  } 
} */

const Counters = ({ onDelete, onReset, onIncrement, counters }) => {
  console.log("onIncrement", onIncrement);
  return (
    <div>
      <button onClick={onReset} className="btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
