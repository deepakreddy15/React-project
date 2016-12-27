import React, { Component } from 'react';
import NewProjectItem from './projectitems'

class NewProject extends Component {
 constructor(){
  super();
    this.state={
        Input:"deepak"
    }
  }
 changeinput(Input){
  this.setState({Input});
 }
  render() {
    let pitems;
    if(this.props.projectitems){
      pitems=this.props.projectitems.map(proj => {
        return (
            <NewProjectItem key={proj.title} projitem={proj}/>
          )
      })
    }

    return (
      <div className="App">
      <h1>this is input from </h1>{this.state.Input}<br/>
      <NewProjectItem changeinput={this. changeinput.bind(this)}/>
        {this.props.name}
        <br/>
        got it <br/>
        {this.props.children} what
        this is {pitems}
      </div>
    );
  }
}

export default NewProject;
