import { StudentsService } from './../students.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss'],
})
export class AddStudentsComponent implements OnInit {
  addForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentsService: StudentsService
  ) {
    this.addForm =this.formBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required,Validators.maxLength(20)],
      email:['',Validators.required,Validators.maxLength(20)],
      password:['',Validators.required,Validators.maxLength(20)],
      gender:['',Validators.required],
      // hobby:['',Validators.required],
      country:['',Validators.required]
    })
  }

  ngOnInit(): void {}
 
}
