import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentListComponent} from "../student-list/student-list.component";
import {StudentDetailsComponent} from "../student-details/student-details.component";
import {CreateStudentComponent} from "../create-student/create-student.component";
import {EditStudentComponent} from "../edit-student/edit-student.component";
import {StudyProgramsComponent} from "../study-programs/study-programs.component";


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: StudentListComponent},
  {path: 'studyPrograms', component: StudyProgramsComponent},
  {path: 'details/:indeks', component: StudentDetailsComponent},
  {path: 'new', component: CreateStudentComponent},
  {path: 'edit/:indeks', component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
