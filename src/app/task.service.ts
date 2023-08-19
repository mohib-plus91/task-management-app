import { Injectable, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  taskAdded: EventEmitter<void> = new EventEmitter<void>();

  addTask(title: string) {
    const task: Task = {
      id: this.tasks.length + 1,
      title: title,
      completed: false
    };
    this.tasks.push(task);
    this.taskAdded.emit();
  }

  getTasks() {
    return this.tasks;
  }

}
