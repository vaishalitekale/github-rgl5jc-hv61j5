import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoListService } from '../services/todo-list.service';


@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  
  todoListItem: TodoItem[];
  constructor(private toDoService: TodoListService) {
    
  }
  ngOnInit() {
    this.todoListItem = this.toDoService.getTodoList();
  }
  
  addItem(title: string) {
    this.todoListItem.push({ title: title });
  }

  removeItem(item) {
    this.toDoService.deleteItem(item);
  }

  updateItem(item, changes) {
    this.toDoService.updateItem(item, changes);
  }

}