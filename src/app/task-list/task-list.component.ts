import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import {NgClass, NgIf} from "@angular/common";
import { NgFor } from "@angular/common";

@Component({
  imports: [NgIf,
    NgFor, NgClass],
  selector: 'app-task-list',
  standalone: true,
  styleUrls: ['./task-list.component.css'],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  tasks = this.taskService.getTasks();


  constructor(private taskService: TaskService) { }

  addTask(nameInput: HTMLInputElement, contentInput: HTMLInputElement): void {
    this.taskService.addTask(nameInput.value, contentInput.value);
    nameInput.value = '';
    contentInput.value = '';
    this.tasks = this.taskService.getTasks(); // Update the list
  }

  closeTask(id: number): void {
    this.taskService.closeTask(id);
    this.tasks = this.taskService.getTasks(); // Update the list
  }

  reactivateTask(id: number): void {
    this.taskService.reactivateTask(id);
    this.refreshTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.refreshTasks();
  }

  private refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

}
