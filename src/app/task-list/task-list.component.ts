import { Component,OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit  {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  currentFilter: 'All' | 'Completed' | 'Incomplete' = 'All';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
    this.taskService.taskAdded.subscribe(() => {
      this.tasks = this.taskService.getTasks();
      this.filterTasks();
    });
  }

  setFilter(filter: 'All' | 'Completed' | 'Incomplete') {
    this.currentFilter = filter;
    this.filterTasks();
  }

  filterTasks() {
    switch (this.currentFilter) {
      case 'All':
        this.filteredTasks = this.tasks;
        break;
      case 'Completed':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      case 'Incomplete':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
    }
  }

  markAsCompleted(task: Task) {
    task.completed = true;
    this.filterTasks();
  }

  markAsIncomplete(task: Task) {
    task.completed = false;
    this.filterTasks();
  }


}
