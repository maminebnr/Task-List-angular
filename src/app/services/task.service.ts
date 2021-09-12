import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type ': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = ' http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(taskId:number):Observable<Task>{
      return this.http.delete<Task>(`${this.apiUrl}/${taskId}`)
  }

  updateTask(task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task)
  }

  AddTask(task:Task):Observable<Task>{
    return this.http.post<Task>(`${this.apiUrl}`,task)
  }

  
}
