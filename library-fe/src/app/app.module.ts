import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { MediaDetialComponent } from './media-detial.component';
import { MediaComponent } from './media.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaDetialComponent,
    MediaComponent,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
