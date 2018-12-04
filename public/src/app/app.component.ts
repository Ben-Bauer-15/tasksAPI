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
  currentTask;

  constructor(private _httpService : HttpService){

  }

  ngOnInit(){
    this.allTasks = []
    this.currentTask = {title : ""}
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

  show(id){
    for (var i = 0; i < this.allTasks.length; i++){
      if (this.allTasks[i]._id == id){
        this.currentTask = this.allTasks[i]
      }
    }
  }

  edit(){
    console.log(this.currentTask)
    let editedTask = this._httpService.editTask(this.currentTask)
    this.currentTask = {title : ""}
    editedTask.subscribe(data => {
      console.log(data)
    })
  }
  
  delete(id){
    let deletedTask = this._httpService.deleteTask(id)
    deletedTask.subscribe(data => {
      console.log(data)
    })

    for (var i = 0; i < this.allTasks.length; i++){
      if (this.allTasks[i]._id == id){
        this.allTasks.splice(i, 1)
        break
      }
    }
  }



}
