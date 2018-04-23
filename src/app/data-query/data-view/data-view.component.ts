import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  _dataSet = [];
  startRow = 1;
  endRow = 10;
  _total = 120;
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 120; i++) {
      this._dataSet.push({
        devCode: `8661040266917770`,
        realname: `盛德平${i}`,
        sleepScore: '86.24',
        sleepDuration: '6.77$',
        sleepBeginTime: '2017-09-29 00:33:20',
        sleepEndTime: '2018-04-19 07:19:40',
        deepSleep: '0',
        REMSleep: '4.3',
        movementCount: '11',
        hr: '59',
        snoreDuration: '',
        enterSleepDuration: '',
        qyCount: `${i}`,
        surplusQ: '79',
        snore: '2'
      });
    }
  }

}
