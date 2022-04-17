import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {
  students:any;

  constructor(private studentservice:StudentsService) { }

  ngOnInit(): void {
    this.studentservice.getStudents().subscribe(
      (result:any)=>{
        // console.log(result)
        this.students =result.data;
      }
    )
  }
  deleteStudent(id:any){
    console.log(id)
  this.studentservice.deleteStudents(id).subscribe(data=>{
    this.students = this.students.filter((u:any)=> u.id!==id);
  })
  }
}


