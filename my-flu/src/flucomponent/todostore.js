import {EventEmitter} from 'events';
import tododispatcher from './tododispatcher';
class Todostore extends EventEmitter {
constructor(){
	super();
	this.todo=[{
		title:"book",
		name:"deepak"
	},{
		title:"rough",
		name:"reddy"
	}]
}

getAll(){
	console.log(this.todo);
	return this.todo;
	}
createTodo(title,name){
const list={title:title,name:name};
this.todo.push(list);
this.emit("change");
}
handelactions(action){
	//console.log("this dispatcher " + action.type + action.title+action.name);
	switch (action.type){
		case 'CREATE_TODO': {
			
			this.createTodo(action.title,action.name);
			
		} 
		case 'Reload_TODO': {
			this.todo=action.todos;
			this.emit("change");

		}
	}
}
}

const store= new Todostore;
tododispatcher.register(store.handelactions.bind(store));
//window.tododispatcher=tododispatcher;
//window.store=store;
export default store;