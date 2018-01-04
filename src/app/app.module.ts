import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {StudentMenagementService} from './service/student/student-menagement.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

import {HttpClientModule} from '@angular/common/http';
import { StudyProgramsComponent } from './study-programs/study-programs.component';
import {StudyProgramManegementService} from './service/studyProgram/study-program-manegement.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    CreateStudentComponent,
    EditStudentComponent,
    StudyProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentMenagementService, StudyProgramManegementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
