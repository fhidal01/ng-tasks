import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookieModule } from 'ngx-cookie';

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
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
