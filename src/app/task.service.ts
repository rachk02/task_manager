import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  private idCounter = 0;

  constructor() { }

  addTask(name: string, content: string): void {
    const task: Task = {
      id: ++this.idCounter,
      name,
      content,
      status: 'active'
    };
    this.tasks.push(task);
  }

  closeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = 'closed';
    }
  }

  reactivateTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = 'active';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
