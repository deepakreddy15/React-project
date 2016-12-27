import React, { Component } from 'react';


class Todo extends Component {


  render() {

    return (
      <div className="App">
      <h1>course</h1>
      <ul>
      <li >{this.props.list}hi</li>
      </ul>
      
      
      </div>
    );
  }
}

export default Todo;