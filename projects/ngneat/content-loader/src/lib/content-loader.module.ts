import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BulletListContentLoaderComponent } from './bullet-list-loader.component';
import { ContentLoaderComponent } from './content-loader.component';
import { FacebookContentLoaderComponent } from './facebook-loader.component';
import { ListContentLoaderComponent } from './list-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ContentLoaderComponent,
    FacebookContentLoaderComponent,
    BulletListContentLoaderComponent,
    ListContentLoaderComponent
  ],
  exports: [
    ContentLoaderComponent,
    FacebookContentLoaderComponent,
    BulletListContentLoaderComponent,
    ListContentLoaderComponent
  ]
})
export class ContentLoaderModule {
  static forRoot(): ModuleWithProviders<ContentLoaderModule> {
    return {
      ngModule: ContentLoaderModule
    };
  }
}
