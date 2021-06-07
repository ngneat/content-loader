import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContentLoaderComponent } from './content-loader.component';

@Component({
  selector: 'facebook-content-loader',
  template: `
    <content-loader viewBox="0 0 476 124">
      <svg:rect x="48" y="8" width="88" height="6" rx="3" />
      <svg:rect x="48" y="26" width="52" height="6" rx="3" />
      <svg:rect x="0" y="56" width="410" height="6" rx="3" />
      <svg:rect x="0" y="72" width="380" height="6" rx="3" />
      <svg:rect x="0" y="88" width="178" height="6" rx="3" />
      <svg:circle cx="20" cy="20" r="20" />
    </content-loader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacebookContentLoaderComponent extends ContentLoaderComponent {}
