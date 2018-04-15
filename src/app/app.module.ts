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
import {FormsModule} from '@angular/forms';
import {HelloWorldService} from './hello-world/hello-world.service';

/**
 * declarations 声明组件信息*/
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentChildComponent,
    WorldSkyComponent,
    WorldGroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [HelloWorldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
