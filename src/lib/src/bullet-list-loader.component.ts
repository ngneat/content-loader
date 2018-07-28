import { Component } from '@angular/core';

import { ContentLoaderComponent } from './content-loader.component';

@Component({
  selector: 'bullet-list-content-loader',
  template: `
  <content-loader [animate]="animate" [width]="width" [height]="height" [speed]="speed" [preserveAspectRatio]="preserveAspectRatio"
  [primaryColor]="primaryColor" [secondaryColor]="secondaryColor" [primaryOpacity]="primaryOpacity" [secondaryColor]="secondaryColor"
  [uniqueKey]="uniqueKey">
    <svg:circle cx="10" cy="20" r="8" />
    <svg:rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <svg:circle cx="10" cy="50" r="8" />
    <svg:rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <svg:circle cx="10" cy="80" r="8" />
    <svg:rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <svg:circle cx="10" cy="110" r="8" />
    <svg:rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
   </content-loader>
  `
})
export class BulletListContentLoaderComponent extends ContentLoaderComponent {}
