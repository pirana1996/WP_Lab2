import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StudyProgram} from '../../../model/StudyProgram';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class StudyProgramManegementService {

  private studentsUrl = 'http://localhost:8080/api/study_programs';  // URL to web api

  constructor(private http: HttpClient) { }

  public getAllPrograms(): Observable<StudyProgram[]> {
    return this.http.get<StudyProgram[]>(this.studentsUrl);
  }

  public delete(program: StudyProgram): Observable<StudyProgram> {
    const url = `${this.studentsUrl}/${program.id}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log(JSON.stringify(program));
    return this.http.delete(url, httpOptions);

  }
}
