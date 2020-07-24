import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  deleteHandler = (counterId) => {
    console.log("good bai ji", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  incrementHandler = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  resetHandler = () => {
    console.log("reset bai ji");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <NavBar total={this.state.counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            onDelete={this.deleteHandler}
            onIncrement={this.incrementHandler}
            onReset={this.resetHandler}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
