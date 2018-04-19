import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PaginationVo} from '../../entity/PaginationVo';
import {DataService} from '../data.service';
import {isNullOrUndefined} from 'util';
import {CallLoss} from '../../entity/CallLoss';

@Component({
  selector: 'app-data-query',
  templateUrl: './data-query.component.html',
  styleUrls: ['./data-query.component.css']
})
export class DataQueryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}


