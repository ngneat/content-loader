import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContentLoaderComponent } from './content-loader.component';

@Component({
  selector: 'bullet-list-content-loader',
  template: `
    <content-loader viewBox="0 0 245 125">
      <svg:circle cx="10" cy="20" r="8" />
      <svg:rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
      <svg:circle cx="10" cy="50" r="8" />
      <svg:rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
      <svg:circle cx="10" cy="80" r="8" />
      <svg:rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
      <svg:circle cx="10" cy="110" r="8" />
      <svg:rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </content-loader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletListContentLoaderComponent extends ContentLoaderComponent {}
