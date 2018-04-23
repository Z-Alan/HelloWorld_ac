import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { WorldSkyComponent } from './hello-world/world-sky/world-sky.component';
import { WorldGroundComponent } from './hello-world/world-ground/world-ground.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HelloWorldService} from './hello-world/hello-world.service';
import {ZorroFormComponent } from './zorro-form/zorro-form.component';
import {DataQueryComponent} from './data-query/data-query.component';
import {DataViewComponent} from './data-query/data-view/data-view.component';
import { Angular4Form1Component } from './angular4-form1/angular4-form1.component';
/**
 * declarations 声明组件信息*/
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentChildComponent,
    WorldSkyComponent,
    WorldGroundComponent,
    ZorroFormComponent,
    DataQueryComponent,
    DataViewComponent,
    Angular4Form1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    {provide: 'HelloWorldService', useClass: HelloWorldService},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
