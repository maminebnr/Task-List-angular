import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task App';
  showAddTask:boolean =false;
  subscription:Subscription

  constructor(private uiService:UiService) {
    this.subscription =this.uiService.onToogle()
    .subscribe(value=>this.showAddTask=value)
  }

  ngOnInit(): void {}

  AddTask(){
    console.log("header ok")
    this.uiService.tooglAddTask()
  }
}
