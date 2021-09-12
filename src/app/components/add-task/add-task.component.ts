import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
TaskService
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
   text:string;
   day:string;
   reminder:boolean=false;
   taille:number =0;
   @Output() onAddTask:EventEmitter<Task>=new EventEmitter()
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.taskservice.getTasks().subscribe((res)=>this.taille=res.length + 1)
  }
  onSubmiit(){
    if(!this.text && !this.day){
      alert("please add task")
    }
    const newTask ={
      id:this.taille,
      text:this.text,
      day:this.day,
      reminder:this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false
  }
 
}
