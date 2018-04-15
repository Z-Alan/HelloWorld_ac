import {Component,Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-world-ground',
  templateUrl: './world-ground.component.html',
  styleUrls: ['./world-ground.component.css']
})
export class WorldGroundComponent implements OnInit {

  @Input() editable: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("world ground oninit ..."+this.editable);
  }

}
