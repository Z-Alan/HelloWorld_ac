import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-world-sky',
  templateUrl: './world-sky.component.html',
  styleUrls: ['./world-sky.component.css']
})
export class WorldSkyComponent implements OnInit {

  @Input() editable: boolean;

  constructor() { }

  ngOnInit() {

    console.log("world-sky init....");
  }


}
