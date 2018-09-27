import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CookieModule } from 'ngx-cookie';

import { TaskHttpService } from './services/task-http.service';

import { AppRoutingModule, routableComponents} from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [TaskHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
