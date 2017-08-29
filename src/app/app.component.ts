import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentsCollection: Array<object> = [];
  message;
  print = false;

  studentRecord: {
    studNo: number,
    studFirstName: string,
    studLastName: string,
    studProgram: string,
    studYear: number
  };

  checkPatterns(value: any, pattern: RegExp): boolean {
    if (pattern.test(value))
      return true;
    else
      return false;
  }

  addEvent(dataSet): boolean{
    
    this.studentRecord = dataSet;
    const stringPattern = /^[A-z]+$/;
    const numberPattern = /^[0-9]+$/;
    const yearPattern = /^[1-5]+$/;
    
    /*this.studentsCollection.push(this.studentRecord);
    console.log('Collection: '+this.studentsCollection);*/

    if (this.checkPatterns(this.studentRecord.studNo, numberPattern) &&
      this.checkPatterns(this.studentRecord.studFirstName, stringPattern) &&
      this.checkPatterns(this.studentRecord.studLastName, stringPattern) &&
      this.checkPatterns(this.studentRecord.studProgram, stringPattern) &&
      this.checkPatterns(this.studentRecord.studYear, yearPattern)){
        console.log(dataSet);
        this.studentsCollection.push(this.studentRecord);
        console.log('Collection: '+this.studentsCollection);
        this.message = null;
        return true;
      }
      else {
        this.message = "EROOOOOOOOOOOOOOOOOOOOOOOOOOR!";
        console.log("BUANG");
        return false;
      }
      
  }

  printEvent(event){
    if (event.mode == 'print'){
      this.print = true;
      return this.print;
    }
  }


}
