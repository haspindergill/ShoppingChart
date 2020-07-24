import React, { Component } from "react";

export default class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatNumber()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatNumber() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
