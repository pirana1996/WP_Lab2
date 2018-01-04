import { Injectable } from '@angular/core';
import {Student} from '../../../model/student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {delay} from 'rxjs/operator/delay';
import {RequestOptions} from '@angular/http';
import {Subscription} from 'rxjs/Subscription';


/*const arrayStudents: Student[] = [
  {name: 'Kostadin', lastName: 'Kocev', indeks: '151168', studyProgram: 'KNI'},
  {name: 'Petko', lastName: 'Petkov', indeks: '123456', studyProgram: 'MT'},
  {name: 'Trajko', lastName: 'Trajkov', indeks: '654321', studyProgram: 'PET'},
  {name: 'Gjoko', lastName: 'Gjokev', indeks: '135724', studyProgram: 'KNI - AN'},
];
*/
@Injectable()
export class StudentMenagementService {

  private studentsUrl = 'http://localhost:8080/api/students';  // URL to web api

  constructor(private http: HttpClient) { }


  // public students = [
  //                     new Student('Kostadin', 'Kocev', '151168', 'KNI'),
  //                     new Student('Petko', 'Petkov', '123456', 'MT'),
  //                     new Student('Trajko', 'Trajkov', '654321', 'PET'),
  //                     new Student('Gjoko', 'Gjokov', '135724', 'KNI - AN')
  //                   ];
  //public students: Student[];
  public students = new Array<Student>();
  //public students = arrayStudents;


  public getStudents(): Observable<Student[]> {
    //return Promise.resolve(this.students);

    //return Observable.of(this.students);
    return this.http.get<Student[]>(this.studentsUrl);
  }


  // public getStudents(): void{
  //   this.http.get<Student[]>(this.studentsUrl).subscribe();
  // }

  public findByIndeks(studentIndeks: string): Observable<Student> {
    const url = `${this.studentsUrl}/${studentIndeks}`;
    return this.http.get<Student>(url);
    /*const result = this.students.filter(student => student.indeks === studentIndeks);
    if (result && result.length > 0) {
      return Promise.resolve(result[0]);
    } else {
      return Promise.reject({
        errorMessage: 'No student with the given index found',
        errorCode: 404
      });
    }*/
  }

  public edit(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.indeks}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log('url: ' + url);
    console.log(JSON.stringify(student));
    return this.http.patch(url, student, httpOptions);
  }

  /* OLD
  public add(newStudent: Student): Promise<any> {
    this.students.push(newStudent);
    return Promise.resolve();
  }
  */
/*
  public add (student: Student): void {

    const url = `${this.studentsUrl}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    console; .log(JSON.stringify(student));
    this.http.post(url, student, httpOptions).subscribe();
  }
*/

  public add (student: Student): Observable<Student> {

    const url = `${this.studentsUrl}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log(JSON.stringify(student));
    return this.http.post(url, student, httpOptions);
  }

  public delete(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.indeks}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log(JSON.stringify(student));
    return this.http.delete(url, httpOptions);

  }
}
