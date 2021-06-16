import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todo = ['Get to the work', 'Walk a dog', 'Buy sugar'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  todos: FormGroup;

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todos = new FormGroup({
      title: new FormControl(),
    });
  }

  addNewTodo() {
    console.log(this.todos.value);
    if (this.todos.value) {
      this.todo.push(this.todos.value.todoInput);
      this.todoService
        .addTodo(this.todos.value)
        .subscribe(() => console.log('Success'));
    }
  }

  // drag and drop fucntion
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
