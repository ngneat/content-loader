import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-content-loader',
  template: `
  <content-loader [animate]="animate">
  	<svg:rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
  	<svg:rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
  	<svg:rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
  	<svg:rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
  	<svg:rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
  	<svg:rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
   </content-loader>
  `
})
export class ListContentLoaderComponent {
  @Input() animate = true;
}
