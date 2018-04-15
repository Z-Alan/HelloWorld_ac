import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from './hello-world.service';
import {NzModalService} from 'ng-zorro-antd';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  welcomeUser = 'zhou';
  editable : boolean;

  constructor(private helloWorldService: HelloWorldService,private modalService: NzModalService) {
  }

  ngOnInit() {
      this.editable=this.helloWorldService.getWorldSky(this.welcomeUser);
      console.log("hello world oninit ..."+this.editable);
  }
  showSaveModal(titleTpl) {
    const that = this;
    const modal = this.modalService.open({
      title   : titleTpl,
      content : '是否发布问卷（发布成功问卷后不能修改）',
      closable: false,
      showConfirmLoading: true,
      onOk() {
        that.editable=true;
      },
      onCancel() {}
    });
  }
  showCancelSaveModal(titleTpl) {
    const that = this;
    const modal = this.modalService.open({
      title   : titleTpl,
      content : '确认取消发布么？（请确认无人在答题）',
      closable: false,
      showConfirmLoading: true,
      onOk() {
        that.editable=false;
      },
      onCancel() {}
    });
  }
}
