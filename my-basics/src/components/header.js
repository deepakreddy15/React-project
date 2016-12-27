import React, { Component } from 'react';

import Footer from './footer';
class Header extends Component {
 changetitle(e){
 	const title=e.target.value;
 	this.props.change(title);
 	e.preventDefault();
 }
  render() {

   	var eist=['name','depak','rao']
   	.map((title,i)=>
  		<Footer key={i} listitem={title}></Footer>);
    return (
      <div className="App">
        <h1>welcome {this.props.title}</h1>
        <input onChange={this.changetitle.bind(this)}/>
        {eist}
      </div>
    );
  }
}

export default Header;
