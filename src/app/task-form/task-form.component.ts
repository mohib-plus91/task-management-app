import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  title = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title.trim()) {
      this.taskService.addTask(this.title);
      this.title = '';
    }
  }

}
