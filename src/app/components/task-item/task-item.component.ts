import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  @Output() onDeleteTak:EventEmitter<number>=new EventEmitter();
  @Output() onToggleReminder:EventEmitter<number>=new EventEmitter();
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
    console.log("kfjf",this.task.text)
  }
  deleteTask(taskId:number){
    this.onDeleteTak.emit(taskId)

  }

  onToggle(task){
      this.onToggleReminder.emit(task)
  }

}
