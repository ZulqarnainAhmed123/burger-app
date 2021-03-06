import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleChange = (event) => {
    this.setState( {request: event.target.value} )
  }
  handleChange1 = (event) => {
    this.setState( {request2: event.target.value} )
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var request = this.state.request;
    
    
    fetch(`http://localhost:8080/`,{
      method: 'POST',
        })
        .then(response => {
          return response.text();
        })
        .then(body => {
          alert(body);
        });
  }
  render = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Does anyone hear an echo?</h2>
        </div>
        <div>
          <form className="App-intro" onSubmit={this.handleSubmit}>
            
            <input type="text" onChange={this.handleChange} />
            <input type="text" onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
