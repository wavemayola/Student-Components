import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {
  @Input() print: boolean;
  @Input() studentsCollection: Array<object>;
  constructor() { }

  ngOnInit() {
  }

  display(){
    console.log(this.studentsCollection);
  }

}
