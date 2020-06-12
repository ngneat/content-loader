import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentLoaderComponent } from './content-loader.component';
import {
  BulletListContentLoaderComponent,
  CardContentLoaderComponent,
  ListContentLoaderComponent,
  BarChartContentLoaderComponent,
  TableContentLoaderComponent
} from './prebuilt';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentLoaderComponent,
    BulletListContentLoaderComponent,
    CardContentLoaderComponent,
    ListContentLoaderComponent,
    BarChartContentLoaderComponent,
    TableContentLoaderComponent
  ],
  exports: [
    ContentLoaderComponent,
    BulletListContentLoaderComponent,
    CardContentLoaderComponent,
    ListContentLoaderComponent,
    BarChartContentLoaderComponent,
    TableContentLoaderComponent
  ]
})
export class ContentLoaderModule {}
