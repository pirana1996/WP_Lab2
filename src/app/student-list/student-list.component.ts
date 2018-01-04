import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentMenagementService} from '../service/student/student-menagement.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public title = 'Students Archive';
  public students: Student[];
  public currentStudent: Student;


  constructor(private studentService: StudentMenagementService) {}

  ngOnInit() {
    //this.students = this.studentService.getStudents();
    /*this.studentService.getStudents().then(students => this.students = students )
      .catch(error => console.log(error.errorMessage));*/

    //make this observable with subscribe
    this.studentService.getStudents().subscribe(resultArray => this.students = resultArray);
  }

  onClick(student: Student) {
    this.currentStudent = student;
  }

}
