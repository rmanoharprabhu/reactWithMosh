import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((s) => s.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((s) => {
      s.value = 0;
      return s;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <NavBar
          countLength={this.state.counters.filter((s) => s.value !== 0).length}
        />
        <main className="container">
          <Counters
            onResetAll={this.handleResetAll}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
