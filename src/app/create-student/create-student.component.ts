import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {StudentMenagementService} from "../service/student/student-menagement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  public student: Student;
  constructor(private studentManagementService: StudentMenagementService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user) {
    console.log(user);
    this.student = new Student(user.indeks, user.name, user.lastName, user.studyProgram);
    this.studentManagementService.add(this.student).subscribe(s => this.studentManagementService.students.push(s));
    this.router.navigateByUrl('/list');
  }

}
