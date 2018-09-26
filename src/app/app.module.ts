import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routableComponents} from './app-routing.module';
import { TasksContainerComponent } from './app.component';

@NgModule({
  declarations: [
    TasksContainerComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TasksContainerComponent]
})
export class AppModule { }
