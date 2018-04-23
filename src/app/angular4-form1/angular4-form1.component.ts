import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular4-form1',
  templateUrl: './angular4-form1.component.html',
  styleUrls: ['./angular4-form1.component.css']
})
export class Angular4Form1Component implements OnInit {

  user: { username: string };

  constructor() {
  }

  ngOnInit() {
    this.user = {username: 'zhou'} ;
  }
  userNameChange(name: string) {
    console.log(name);
  }

}
