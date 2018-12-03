import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask : any
  allTasks;

  constructor(private _httpService : HttpService){

  }

  ngOnInit(){
    this.allTasks = []
    this.newTask = {title : "", description : ""}
    this.getAllTasks()
  }


  getAllTasks(){
    var self = this
    let tasks = this._httpService.getAllTasks()
    tasks.subscribe(data => {
      self.allTasks = data.data
    })
  }

  onSubmit(){
    var self = this
    let submittedTask = this._httpService.createTask(this.newTask)
    this.newTask = {title : "", description : ""}
    submittedTask.subscribe(data => {
      console.log(data.data)
      self.allTasks.push(data.data)
    })
  }

  edit(id){
    console.log(id)
  }
  
  delete(id){
    console.log(id)
  }



}
