import React, { Component } from 'react';
import * as math from 'mathjs'
import {Display}   from './Subcomponents';
import {Clear}     from './Subcomponents';
import {Operation} from './Subcomponents';
import {Digit}     from './Subcomponents';

class Calculator extends Component {
  state = {};
  data = {};

  clear = () => {
    this.setState({ display: "" });
    this.data.input = "";
    this.data.justCalculated = false;
    this.data.justCalculatedValue = 0;
  };
  componentDidMount = this.clear;

  addToOp = (thing) => {
    if (this.data.justCalculated && !/÷|−|\+|×/.test(thing)) {
      this.data.input = "";
      this.data.justCalculated = false;
      this.data.justCalculatedValue = 0;
    }
    else if (/÷|−|\+|×/.test(thing)) {
      this.data.justCalculated = false;
      this.data.justCalculatedValue = 0;
    }
    this.data.input += thing;
    this.update();
  };

  update = () => this.setState({ display: this.data.input });

  calc = () => {
    let result = math.eval(
      this.data.input
        .replace(/÷/gu,  "/")
        .replace(/−/gu,  "-")
        .replace(/\+/gu, "+")
        .replace(/×/gu,  "*")
    );
    this.setState({ display: result });
    this.data.justCalculated = true;
    this.data.justCalculatedValue = result;
    this.data.input = String(result);
  };

  handleClick = type => {
    if      (type === "clear")  { return this.clear; }
    else if (type === "equal")  { return this.calc; }
    else if (type === "lparen") { return () => { this.addToOp("("); } }
    else if (type === "rparen") { return () => { this.addToOp(")"); } }
    else if (type === "opdiv")  { return () => { this.addToOp("÷"); } }
    else if (type === "opsub")  { return () => { this.addToOp("−"); } }
    else if (type === "opadd")  { return () => { this.addToOp("+"); } }
    else if (type === "opmul")  { return () => { this.addToOp("×"); } }
    else if (type === "num1")   { return () => { this.addToOp("1"); } }
    else if (type === "num2")   { return () => { this.addToOp("2"); } }
    else if (type === "num3")   { return () => { this.addToOp("3"); } }
    else if (type === "num4")   { return () => { this.addToOp("4"); } }
    else if (type === "num5")   { return () => { this.addToOp("5"); } }
    else if (type === "num6")   { return () => { this.addToOp("6"); } }
    else if (type === "num7")   { return () => { this.addToOp("7"); } }
    else if (type === "num8")   { return () => { this.addToOp("8"); } }
    else if (type === "num9")   { return () => { this.addToOp("9"); } }
    else if (type === "num0")   { return () => { this.addToOp("0"); } }
    else if (type === "num.")   { return () => { this.addToOp("."); } }
  };

  render() {
    return (
      <div className="Calculator">
        <Display display={this.state.display}/>
        {/* End of row */}
        <Digit n="0"         click={this.handleClick("num0")}/>
        <Clear               click={this.handleClick("clear")}/>
        <Operation sign="÷"  click={this.handleClick("opdiv")}/>
        {/* End of row */}
        <Digit n="7"         click={this.handleClick("num7")}/>
        <Digit n="8"         click={this.handleClick("num8")}/>
        <Digit n="9"         click={this.handleClick("num9")}/>
        <Operation sign="−"  click={this.handleClick("opsub")}/>
        {/* End of row */}
        <Digit n="4"         click={this.handleClick("num4")}/>
        <Digit n="5"         click={this.handleClick("num5")}/>
        <Digit n="6"         click={this.handleClick("num6")}/>
        <Operation sign="+"  click={this.handleClick("opadd")}/>
        {/* End of row */}
        <Digit n="1"         click={this.handleClick("num1")}/>
        <Digit n="2"         click={this.handleClick("num2")}/>
        <Digit n="3"         click={this.handleClick("num3")}/>
        <Operation sign="×"  click={this.handleClick("opmul")}/>
        {/* End of row */}
        <Digit n="."         click={this.handleClick("num.")}/>
        <Digit n="("         click={this.handleClick("lparen")}/>
        <Digit n=")"         click={this.handleClick("rparen")}/>
        <Operation sign="="  click={this.handleClick("equal")}/>
      </div>
    );
  };
}

export default Calculator;
