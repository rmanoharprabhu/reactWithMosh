import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Object Destructuring No need to repeat the this.props.onDelete etc.
    const {
      onResetAll,
      onDelete,
      onIncrement,
      counters,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onResetAll} className="btn btn-primary btn-sm m-2">
          Reset All
        </button>
        {counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
