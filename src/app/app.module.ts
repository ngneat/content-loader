import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentLoaderModule } from '../../projects/ngneat/content-loader/src/public_api';
const routes: Routes = [
  {
    path:  '',
    component: AppComponent,
  },
  {
    path:  'home',
    component: AppComponent,
  },

  
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContentLoaderModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
