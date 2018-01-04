import { Component, OnInit } from '@angular/core';
import {StudyProgram} from '../../model/StudyProgram';
import {StudyProgramManegementService} from "../service/studyProgram/study-program-manegement.service";

@Component({
  selector: 'app-study-programs',
  templateUrl: './study-programs.component.html',
  styleUrls: ['./study-programs.component.css']
})
export class StudyProgramsComponent implements OnInit {
  public title = 'Study Program Archive';
  public programs: StudyProgram[];

  constructor(private service: StudyProgramManegementService) { }

  ngOnInit() {
    //make this observable with subscribe
    this.service.getAllPrograms().subscribe(resultArray => this.programs = resultArray);
  }

  deleteProgram(program: StudyProgram) {
    this.service.delete(program).subscribe();
  }

}
