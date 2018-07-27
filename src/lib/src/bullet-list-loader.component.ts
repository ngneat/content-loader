import { Component, Input } from '@angular/core';

@Component({
  selector: 'bullet-list-content-loader',
  template: `
  <content-loader [animate]="animate">
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
export class BulletListContentLoaderComponent {
  @Input() animate = true;
}
