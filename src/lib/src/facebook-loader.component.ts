import { Component } from '@angular/core';

import { ContentLoaderComponent } from './content-loader.component';

@Component({
  selector: 'facebook-content-loader',
  template: `
  <content-loader [animate]="animate" [width]="width" [height]="height" [speed]="speed" [preserveAspectRatio]="preserveAspectRatio"
  [primaryColor]="primaryColor" [secondaryColor]="secondaryColor" [primaryOpacity]="primaryOpacity" [secondaryColor]="secondaryColor"
  [uniqueKey]="uniqueKey">
  	<svg:rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
  	<svg:rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
  	<svg:rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
  	<svg:rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
  	<svg:rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
  	<svg:circle cx="30" cy="30" r="30" />
   </content-loader>
  `
})
export class FacebookContentLoaderComponent extends ContentLoaderComponent {}
