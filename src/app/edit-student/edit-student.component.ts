import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudentMenagementService} from '../service/student/student-menagement.service';
import {Student} from '../../model/student';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  public rForm: FormGroup;
  public student: Student;
  public tmpStudent: Student;

  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private service: StudentMenagementService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'lastName': [null, Validators.required],
      'indeks': [null, Validators.required],
      'studyProgramName': [null, Validators.required]
    });
    //this.tmpStudent = new Student();
    this.tmpStudent = new Student('', '', '', '');
  }


  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIndeks = params.get('indeks');
        const studentObservable = this.service.findByIndeks(studentIndeks);
        // studentPromise.catch(
        //   error => {
        //     console.error(error.errorMessage);
        //   }
        // );
        return studentObservable;
      })
      .subscribe(student => {
        this.student = student;
        this.rForm.controls['name'].patchValue(this.student.name);
        this.rForm.controls['lastName'].patchValue(this.student.lastName);
        this.rForm.controls['indeks'].patchValue(this.student.indeks);
        this.rForm.controls['studyProgramName'].patchValue(this.student.studyProgram.name);
      });

  }

  submit(formValues) {
    // this.tmpStudent.name = formValues.name;
    // this.tmpStudent.lastName = formValues.lastName;
    // this.tmpStudent.indeks = formValues.indeks;
    // this.tmpStudent.studyProgram = formValues.studyProgramName;
    this.tmpStudent = new Student(formValues.indeks, formValues.name, formValues.lastName, formValues.studyProgramName);

    this.service.edit(this.tmpStudent).subscribe();
    console.log(this.tmpStudent);

    this.router.navigateByUrl('/list');

  }
}
