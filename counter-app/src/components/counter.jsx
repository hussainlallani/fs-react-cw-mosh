import React, { Component } from "react";

export default class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,

  //     tags: ["tag1", "tag2", "tag3"],
  //     // imageUrl: 'https://picsum.photos/200'
  //   };

  // renderTags() {
  //     if (this.state.tags.length===0) return <p>There are no tags!</p>;
  //     return (<ul> {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>);
  // }

  // constructor(){
  //     super();
  //     console.log('constructor',this);
  // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (product) => {
  // console.log(product);
  // this.state.count+=1; won't work in react
  // this.setState({ value: this.state.value + 1 });
  // this.setState({ value: this.state.value + 1 });
  // console.log('Increment Clicked',this);
  // };

  // doHandleIncrement = () => {
  //     this.handleIncrement({id:1});
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          {/* <img src={this.state.imageUrl} alt="" /> */}
          {/* <h4>{this.props.id}</h4> */}
          <button
            //   onClick={() => this.handleIncrement()}
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            //   onClick={() => this.handleIncrement()}
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
          {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
          {/* {this.renderTags()}; */}
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
