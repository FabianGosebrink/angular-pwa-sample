import { Component, OnInit } from '@angular/core';
import { TodoService } from '../core/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  items: Todo[] = [];
  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.getData();
  }

  addTodo(description: string) {
    this.todoService.addItem(description).subscribe(() => this.getData());
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.todoService.updateItem(todo).subscribe(() => this.getData());
  }

  private getData() {
    this.todoService
      .getItems()
      .subscribe((items: Todo[]) => (this.items = items));
  }
}
