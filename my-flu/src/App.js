import React, { Component } from 'react';
import Todostore from './flucomponent/todostore';
import Todo from './todo';
import * as todoaction from './flucomponent/todoaction';
class App extends Component {
  constructor(){
  super();
    this.state={
     
      todostoreitems: Todostore.getAll(),
    };
}
componentWillMount(){
  Todostore.on("change",()=>{
    this.setState({
      todos:Todostore.getAll()
    });
  })
  
}
submit(){
  const title= this.refs.title.value;
  const name= this.refs.name.value;
  console.log(title+ "name "+ name);
 todoaction.createtodo(title,name);
 
}
reload(){
  todoaction.reloadtodo();
}
  render() {
console.log("this is : ");

    
    const todoitems=this.state.todostoreitems.map((object) =>{
    return <li key={object.name}>{object.name} {object.title}</li>;
  });
    
    return (
      <div className="App">
      <Todo list={todoitems} />
       
       <input ref="title" name="title"/><br/>
       <input type="password"ref="name" name="name"/>
       <br/>
       <input type="submit" value="submit" onClick={this.submit.bind(this)}/>
       
             <button onClick={this.reload.bind(this)}>Reload</button>

      
      </div>
    );
  }
}
export default App;
