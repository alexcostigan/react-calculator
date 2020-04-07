import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    numberLeft: [],
    numberLeftActive: true,
    operator: "",
    numberRight: [],
    numberRightActive: false,
    result: 0
  }

 setNumber = (n) => {
  if (this.state.numberLeftActive) {
    let numberUpdatedLeft = [...this.state.numLeft, n].join("");
    let numberUpdatedLeftInt = parseInt(numberUpdatedLeft);
    this.setState({
      numberLeft: [numberUpdatedLeftInt],
    }); 
  } else if (this.state.numberRightActive) {
    let numberUpdatedRight = [...this.state.numberRight, n ].join("");
    let numberUpdatedRightInt = parseInt(numberUpdatedRight);
    this.setState({
      numberRight: [numberUpdatedRightInt],
    });
  }
}
setOperator = (o) => {
  this.setState({
    numberLeftActive: false,
    operator: o,
    numberRightActive: true,
  });
}
clear = () => {
  this.setState({
    numberLeft: [],
    numberLeftActive: true,
    operator: "",
    numberRight: [],
    numberRightActive: false,
    result: 0
  });
}
setResult = () => {
  if (this.state.numberLeft && this.state.numberRight) {
    let finalResult = 0;
    if (this.state.operator === "+") {
      finalResult = + this.state.numberLeft + + this.state.numberRight;
    } else if (this.state.operator === "-") {
      finalResult = this.state.numberLeft - this.state.numberRight;
    } else if (this.state.operator === "x") {
      finalResult = this.state.numberLeft * this.state.numberRight;
    } else if (this.state.operator === "/") {
      finalResult = this.state.numberLeft / this.state.numberRight;
    } else {
      finalResult = 0;
    }
    this.setState({
      result: finalResult
    });
  }
}

  // delete = () => {
  //   this.setState({
  //     result: this.numLeft.slice(0, -1)
  //   })
  // }
  render() {
    console.log(this.state)

    return(
      <div className="main">
      
      <div className="container">
        <div className="output">
          
        {this.state.result}
        </div>
        <button onClick={this.clear} className="span-two">AC</button>
        <button onClick={this.delete}>DEL</button>
        <button onClick={() => this.setOperator("/")}>÷</button>
        <button onClick={() => this.setNumber(1)}>1</button>
        <button onClick={() => this.setNumber(2)}>2</button>
        <button onClick={() => this.setNumber(3)}>3</button>
        <button onClick={() => this.setOperator("*")}>*</button>
        <button onClick={() => this.setNumber(4)}>4</button>
        <button onClick={() => this.setNumber(5)}>5</button>
        <button onClick={() => this.setNumber(6)}>6</button>
        <button onClick={() => this.setOperator("+")}>+</button>
        <button onClick={() => this.setNumber(7)}>7</button>
        <button onClick={() => this.setNumber(8)}>8</button>
        <button onClick={() => this.setNumber(9)}>9</button>
        <button onClick={() => this.setOperator("-")}>-</button>
        <button onClick={() => this.setNumber(".")}>.</button>
        <button onClick={() => this.setNumber(0)}>0</button>
        <button onClick={this.setResult} className="span-two">=</button>
        </div>
      </div>
    )
  }
}
export default App;