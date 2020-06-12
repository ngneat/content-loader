import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentLoaderModule } from '../../../ngx-content-loader/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
