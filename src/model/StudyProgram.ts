export class StudyProgram {
  public id: number; //(primary key, auto increment)
  public name: string;

  constructor(name: string){
    this.name = name;
  }
}
