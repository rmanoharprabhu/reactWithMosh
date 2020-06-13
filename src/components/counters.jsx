import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onResetAll}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>
        {this.props.counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
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
