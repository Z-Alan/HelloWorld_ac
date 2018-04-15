import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { WorldSkyComponent } from './hello-world/world-sky/world-sky.component';
import { WorldGroundComponent } from './hello-world/world-ground/world-ground.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
