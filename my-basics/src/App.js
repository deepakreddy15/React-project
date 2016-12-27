import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import { Link } from 'react-router';
class App extends Component {
 constructor(){
  super();
  this.state={
    title:"deepak",
    
  }
 }
 onchangeinput(title){
  this.setState({title:title})
 }
  render() {
       const varl="deepak";
   
    return (
      <div className="App">
        <Header title={this.state.title} change={this.onchangeinput.bind(this)}/>
        <Footer foot={varl}/>
        {this.props.children}
        <div>
        <Link to="header">header</Link><br/><br/>
        <Link to="footer">footer</Link><br/><br/>
        <Link to="body">body</Link>
        </div>
      </div>
    );
  }
}

export default App;
