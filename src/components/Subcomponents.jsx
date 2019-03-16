import React, { Component } from 'react';

export class Display extends Component {
  render() {
    return (<div className="Display">{this.props.display}</div>);
  }
}

export class Clear extends Component {
  render() {
    return (<div onClick={this.props.click} className="Clear">clear</div>);
  }
}

export class Operation extends Component {
  render() {
    return (<div onClick={this.props.click} className="Operation">{this.props.sign}</div>);
  }
}

export class Digit extends Component {
  render() {
    return (<div onClick={this.props.click} className="Digit">{this.props.n}</div>);
  }
}
