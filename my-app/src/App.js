import React, { Component } from 'react';

import NewProject from './components/project';

class App extends Component {
 constructor(){
  super();
    this.state={
    project: [
    {
      title:"java",
      name:"depak"
    },{
      title:"Network",
      name:"depak"
    }
    ]
  }
 }

  
  render() {
    return (
      <div className="App">
      
        {this.props.name}
        <br/>
        got it <br/>
        {this.props.children} what
        <NewProject name="Deepak" projectitems={this.state.project}/>

      </div>
    );
  }
}

export default App;
