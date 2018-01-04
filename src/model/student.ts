import {StudyProgram} from './StudyProgram';

export class Student {
  public indeks: string;
  public name: string;
  public lastName: string;
  public studyProgram: StudyProgram;


  //constructor() {}
  constructor(indeks: string, ime: string, prezime: string, nasoka: string) {
    this.indeks = indeks;
    this.name = ime;
    this.lastName = prezime;
    this.studyProgram = new StudyProgram(nasoka);
  }
}
