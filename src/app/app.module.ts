import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParentChildComponent } from './parent-child/parent-child.component';

/**
 * declarations 声明组件信息*/
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
