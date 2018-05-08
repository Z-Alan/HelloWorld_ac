import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css'],

})
export class ParentChildComponent implements OnInit {

  /**
   * 父子组件通信区域*/
  //  count : number = 0; 这个写法 tsLint会报红,tsLint 建议remove type annotation
  @Input() count = 0;
  constructor() { }

  ngOnInit() {
    console.log('parent-child init ...');
  }
}
