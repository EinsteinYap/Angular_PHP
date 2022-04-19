import { EditStudentsComponent } from './edit-students/edit-students.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListStudentsComponent, pathMatch: 'full' },
  { path: 'add-student', component: AddStudentsComponent },
  { path: 'edit/:id', component: EditStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
