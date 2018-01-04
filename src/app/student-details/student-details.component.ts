import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentMenagementService} from '../service/student/student-menagement.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input()
  public student: Student;

  constructor(private route: ActivatedRoute, private service: StudentMenagementService) {
      this.student = new Student('', '', '', '');
  }


  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIndeks = params.get('indeks');
        const studentObservable = this.service.findByIndeks(studentIndeks);
        return studentObservable;
      })
      .subscribe(student => {
        this.student = student;
      });


    /*    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIndeks = params.get('indeks');
        const studentPromise = this.service.findByIndeks(studentIndeks);
        studentPromise.catch(
          error => {
            console.error(error.errorMessage);
          }
        );
        return studentPromise;
      })
      .subscribe(student => {
        this.student = student;
      });
*/
  }

  deleteStudent() {
    console.log('delete');
    this.service.delete(this.student).subscribe();
  }

}
