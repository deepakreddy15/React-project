import React, { Component } from 'react';


class Footer extends Component {
 
  render() {
   
    return (
      <div className="App">
        <h1>Footer {this.props.foot}</h1>
        {this.props.listitem}
      </div>
    );
  }
}

export default Footer;
