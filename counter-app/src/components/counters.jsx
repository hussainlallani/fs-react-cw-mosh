import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters: counters });
  // };

  // handleDelete = (counterId) => {
  //   console.log("Event Handler Called", counterId);
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters: counters });
  // };

  render() {
    console.log("Counters - Rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2 my-4">
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            // value={counters.value}
            // id={counters.id}

            //   {/* <h4>Counter #{counters.id}</h4> */}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
