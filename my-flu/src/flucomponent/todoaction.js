import tododispatcher from './tododispatcher';

export function createtodo(title,name){
	tododispatcher.dispatch({
		type: 'CREATE_TODO',
		title,
		name
		
	})
}
export function deltetodo(title,name){
	tododispatcher.dispatch({
		type: 'Delete_TODO',
		title,
		name
		
	})
}
export function reloadtodo(){
	tododispatcher.dispatch({
		type: 'Reload_TODO',
		todos:[{
		title:"react",
		name:"deepak"
	},{
		title:"angular",
		name:"reddy"
	}]
		
	})
}