import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My ToDo List!';

  newTodo: string;
  todoList: any;
  toDoObj; any;

  constructor() {
    this.newTodo = '';
    this.todoList = [];
  }

  addTodo(event) {
    this.toDoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todoList.push(this.toDoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for (var i = (this.todoList.length - 1); i > -1; i--) {
      if (this.todoList[i].completed) {
        this.todoList.splice(i, 1);
      }
    }
  }
}
