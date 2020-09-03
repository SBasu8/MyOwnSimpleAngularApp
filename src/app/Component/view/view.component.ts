import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  message: string = "Welcome";

  uname: string;
  pass: string;
  constructor() { }

  ngOnInit(): void {

  }

  submit(): void{
    if(this.uname=="Suvronil" && this.pass=="Basu")
      this.message = "Submitted!!!";
    else this.message = "Invalid! Try again!";
  }

}
