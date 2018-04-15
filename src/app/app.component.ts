import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // parent-child 通信初始值
  initialCount = 5;

  changeMsg: String;

  countChange(event: number) {
    this.changeMsg = `子组件change事件已触发，当前值是: ${event}`;
  }
}
