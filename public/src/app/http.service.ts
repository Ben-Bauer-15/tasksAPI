import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) {
   }

   getAllTasks(){
     return this._http.get('/allTasks')
   }

   createTask(obj){
     return this._http.post('/new', obj)
   }

   editTask(obj){
     return this._http.put('/update/' + obj._id + '/' + obj.title + '/' + obj.description + '/false', obj)
   }

   deleteTask(id){
     return this._http.delete('/delete/' + id)
   }
}
