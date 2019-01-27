import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()

export class TodoDataService {

	//automatic increment id
	lastId = 0;

	//placehoder for todo
	todos: Todo[] = [];

  	constructor() { }

  	//simple POST /todos
  	addTodo(todo: Todo): TodoDataService{
  		if(!todo.id){
  			todo.id = ++this.lastId;
  		}
  		this.todos.push(todo);
  		return this;
  	}

  	// Simulate DELETE /todos/:id
	deleteTodoById(id: number): TodoDataService {
	    this.todos = this.todos
	      .filter(todo => todo.id !== id);
	    return this;
	}

  	//simple PUT /todos/:id
  	updateTodoById(id: number, values: Object = {}): Todo | any{
  		const todo = this.getTodoById(id);
  		if(!todo){ return this; }
  		Object.assign(todo, values);
  		return todo;
  	}

  	//get All todo
  	getAllTodos(): Todo[]{
  		return this.todos;
  	}

  	//simple GET /todos/:id
  	getTodoById(id: number): Todo | any {
  		return this.todos
  		.filter(todo => todo.id === id)
  		.pop();
  	}

  	//simple GET /todos/:category
  	getTodoByCategory(id: number): Todo[]{
  		return this.todos
  			.filter(todo => todo.category === id);
  	}	

  	//when create todo.js , we have create filed complete 
  	//TOggle todo complete
  	toggleTodoComplete(todo: Todo){
  		const updateTodo = this.updateTodoById(todo.id,{
  			complete: !todo.complete
  		});
  		return updateTodo;
  	}
}
