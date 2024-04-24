import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import {NgClass, NgIf} from "@angular/common";
import { NgFor } from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Task } from '../task.model';

@Component({
  imports: [
    NgIf,
    NgFor,
    NgClass,
    FormsModule
  ],
  selector: 'app-task-list',
  standalone: true,
  styleUrls: ['./task-list.component.css'],
  templateUrl: './task-list.component.html'
})

export class TaskListComponent {
  tasks = this.taskService.getTasks();
  selectedTask: Task = {
    id: 0,
    name: '',
    content: '',
    status: 'active'
  };

  constructor(private taskService: TaskService) {}

  addTask(nameInput: HTMLInputElement, contentInput: HTMLInputElement): void {
    this.taskService.addTask(nameInput.value, contentInput.value);
    nameInput.value = '';
    contentInput.value = '';
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskStatus(task: any) {
    if (task.status === 'active') {
      this.taskService.closeTask(task.id);
    } else {
      this.taskService.reactivateTask(task.id);
    }
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
