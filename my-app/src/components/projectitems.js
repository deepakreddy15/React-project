import React, { Component } from 'react';


class NewProjectItem extends Component {
 
  static defaultProps={
    category:['dpk','rdy','mrg']
  }
   formsubmit(e){
    if(this.refs.title.value===''){
      alert("enter name");
    }
    console.log(this.refs.category.value);
    e.preventDefault();
  }
  changeinput(e){
    const input=e.target.value;
    this.setState(input);
    e.preventDefault();
  }

  render() {
   let catitems;
   catitems=this.props.category.map(category=>{
    return <option key={category} value={category}>{category}</option>
   });
    return (
      
       <div>
     
       <br/> <br/>
       <form onSubmit={this.formsubmit.bind(this)}>
       <lable>Name
       </lable><br/>
       <input type="text" ref="title" onChange={this.changeinput.bind(this)}/>
       <br/>
       <select ref="category">
       {catitems}
       </select>
       <input type="submit" value="submit"/>
       </form>
        </div>
        
      
    );
  }
}

export default NewProjectItem;
