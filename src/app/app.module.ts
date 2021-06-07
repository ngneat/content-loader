import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContentLoaderModule } from '@ngneat/content-loader';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'content-loader' }), ContentLoaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
