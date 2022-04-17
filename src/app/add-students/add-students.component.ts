import { StudentsService } from './../students.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss'],
})
export class AddStudentsComponent implements OnInit {
  addForm: any;
  HobbyList: any = ['Cricket', 'Movies', 'TV', 'Reading', 'Magazine'];
  HobbyArray: any[] = [];
  vals=''
  data= this.vals.split(',');
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentsService: StudentsService
  ) {
    this.addForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      hobbyField: new FormControl(this.data),
      country: ['', Validators.required],
    });
  }
  get authorizedArray() {
    return this.addForm.get('hobbyField') as FormArray;
  }

  setAuthorized(data: string[]) {
    this.HobbyArray = this.HobbyList.map((x: any) => ({
      name: x,
      value: data.indexOf(x) >= 0,
    }));
  }

  parse() {
    const result = this.HobbyList.map((x: any, index: any) =>
      this.HobbyArray[index].value ? x : null
    ).filter((x: any) => x);
    return result.maxLength > 0 ? result : null;
  }
  ngOnInit(): void {
    this.setAuthorized(this.data)
  }
  onSubmit() {
    this.studentsService.createStudents(this.addForm.value).subscribe((data:any)=>{
      this.router.navigate(['/'])
    },
    error =>{
      alert(error);
    })
  }
}
