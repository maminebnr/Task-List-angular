import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
TaskService;
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskservice: TaskService) {}

  ngOnInit() {
    this.getTasks();
    console.log('tasks', this.tasks);
  }

  getTasks() {
    this.taskservice.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  delete(task: Task) {
    this.taskservice
      .deleteTask(task.id)
      .subscribe(
        () => (console.log("ok"))
      );
      this.getTasks()
  }

  ToggleReminder(task){
    task.reminder =!task.reminder
    this.taskservice.updateTask(task).subscribe();
  }


  addTask(task:Task){
    this.taskservice.AddTask(task).subscribe((task)=>this.tasks.push(task))
  }
}
