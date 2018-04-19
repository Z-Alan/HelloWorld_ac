import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-zorro-table',
  templateUrl: './zorro-table.component.html',
  styleUrls: ['./zorro-table.component.css']
})
export class ZorroTableComponent implements OnInit {
  data = [
    {
      key: 1,
      devCode: '8661040266917770',
      realname: '盛德平',
      sleepScore: '86.24',
      sleepDuration: '6.77',
      sleepBeginTime: '2017-09-29 00:33:20',
      sleepEndTime: '2018-04-19 07:19:40',
      deepSleep: '0',
      REMSleep: '4.3',
      movementCount: '11',
      hr: '59',
      snoreDuration: '',
      enterSleepDuration: '',
      qyCount: '0',
      surplusQ: '79',
      snore: '2',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      key: 2,
      devCode: '8661040266917770',
      realname: '王平',
      sleepScore: '86.24',
      sleepDuration: '6.77',
      sleepBeginTime: '2017-09-29 00:33:20',
      sleepEndTime: '2018-04-19 07:19:40',
      deepSleep: '0',
      REMSleep: '4.3',
      movementCount: '11',
      hr: '59',
      snoreDuration: '',
      enterSleepDuration: '',
      qyCount: '0',
      surplusQ: '79',
      snore: '2',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
