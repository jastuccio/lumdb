import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  submit = () => {
    console.log(this.text.value);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" />
        </header>
        <input type="text" ref={input => (this.text = input)} />
        <button onClick={this.submit}>Show Value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props; //deconstruction
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
