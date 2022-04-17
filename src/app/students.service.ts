import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Students} from './students'
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost/api/';

  getStudents(){
    return this.http.get<Students[]>(this.baseUrl+'view.php');

  }

  deleteStudents(id:any){
    console.log(id);
    return this.http.delete(this.baseUrl+'delete.php?id='+id);

  }
}
