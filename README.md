# Angular Content Loader

[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)

<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

Angular component that uses SVG to create a collection of loaders which simulates the structure of the
content that will be loaded, similar to Facebook cards loaders.

[Live Demo](https://stackblitz.com/edit/ngx-content-loader)

## Features

This is an Angular port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

- :gear: **Completely customizable:** you can change the colors, speed and sizes;
- :pencil2: **Create your own loading:** use the
  [create-react-content-loader](https://danilowoz.github.io/create-react-content-loader/) to create
  your custom loadings easily;
- :ok_hand: **You can use right now:** there are a lot of presets to use the loader, see the
  [options](#examples);
- :rocket: **Performance:** uses pure SVG to work, so it works without any extra scripts,
  canvas, etc;

## Install

### Yarn

```bash
yarn add @ngneat/content-loader
```

## Usage

```ts
import { ContentLoaderModule } from '@ngneat/content-loader';

@NgModule({
  imports: [ContentLoaderModule]
})
export class AppModule {}
```

```html
<content-loader>
  <svg:rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
  <svg:rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
  <svg:rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
  <svg:rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
  <svg:rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
  <svg:rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
</content-loader>
```

> Warning: Safari renders the SVG in black in case your Angular application uses the `<base href="/" />` tag in the `<head/>` of your `index.html`.
> Refer to the input property `baseUrl` below to fix this issue.

### Examples

#### Facebook Style

```html
<facebook-content-loader></facebook-content-loader>
```

![Facebook Style](https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif)

#### List Style

```html
<list-content-loader></list-content-loader>
```

![List Style](https://user-images.githubusercontent.com/4838076/36352948-b8931430-149e-11e8-9f4b-3f00bc444a6d.gif)

#### Bullet list Style

```html
<bullet-list-content-loader></bullet-list-content-loader>
```

![Bullet list Style](https://user-images.githubusercontent.com/4838076/31998372-59817bac-b96e-11e7-8ef8-07f61670ee18.gif)

## API

### @Inputs

| Input               | Type    | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                     |
| ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| animate             | boolean | `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `false` to render with no animation                                                                                             |
| baseUrl             | string  | `` | Required if you're using `<base href="/" />` in your `<head/>`. Defaults to an empty string. This prop is commom used as: `<content-loader [baseUrl]="window.location.pathname"></content-loader>` which will fill the svg attribute with the relative path. Do not forget to provide the window property from your component class because `window` is not available in the template otherwise. Related [#93](https://github.com/danilowoz/react-content-loader/issues/93). |
| ignoreBaseUrl       | boolean | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Will ignore current baseUrl. Useful for cases where the url changes after the page is loaded (changing GET params for instance) |
| width               | number  | `400`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                 |
| height              | number  | `130`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                 |
| speed               | number  | `2`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                 |
| preserveAspectRatio | string  | `'xMidYMid meet'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                 |
| primaryColor        | string  | `'#f9f9f9'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                 |
| secondaryColor      | string  | `'#ecebeb'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                 |
| primaryOpacity      | number  | `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                 |
| secondaryOpacity    | number  | `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                 |
| uniqueKey           | string  | `randomId()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Unique ID, you need to make it consistent for SSR                                                                               |
| rtl                 | boolean | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Right-to-left animation                                                                                                         |
| style               | Object  | `null`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Ex: `{ width: '100%', height: '70px' }`                                                                                         |

## Credits

This is basically an Angular port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

## License

MIT &copy; [NetanelBasal](https://github.com/NetanelBasal)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.netbasal.com"><img src="https://avatars1.githubusercontent.com/u/6745730?v=4" width="100px;" alt="Netanel Basal"/><br /><sub><b>Netanel Basal</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=NetanelBasal" title="Code">💻</a> <a href="#content-NetanelBasal" title="Content">🖋</a> <a href="https://github.com/NetanelBasal/content-loader/commits?author=NetanelBasal" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.mapianist.com"><img src="https://avatars0.githubusercontent.com/u/7777929?v=4" width="100px;" alt="Heo"/><br /><sub><b>Heo</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=leo6104" title="Code">💻</a></td>
    <td align="center"><a href="http://www.andreas.ae"><img src="https://avatars3.githubusercontent.com/u/2174826?v=4" width="100px;" alt="Andreas Aeschlimann"/><br /><sub><b>Andreas Aeschlimann</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=andreas-aeschlimann" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/alexw10"><img src="https://avatars0.githubusercontent.com/u/9453636?v=4" width="100px;" alt="alexw10"/><br /><sub><b>alexw10</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=alexw10" title="Code">💻</a> <a href="https://github.com/NetanelBasal/content-loader/commits?author=alexw10" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/nonsocode"><img src="https://avatars3.githubusercontent.com/u/12021370?v=4" width="100px;" alt="Chinonso Chukwuogor"/><br /><sub><b>Chinonso Chukwuogor</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=nonsocode" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/wynfred"><img src="https://avatars2.githubusercontent.com/u/9249564?v=4" width="100px;" alt="wynfred"/><br /><sub><b>wynfred</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=wynfred" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/irustm"><img src="https://avatars1.githubusercontent.com/u/16316579?v=4" width="100px;" alt="Rustam"/><br /><sub><b>Rustam</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=irustm" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/gund"><img src="https://avatars0.githubusercontent.com/u/3644678?v=4" width="100px;" alt="Alex Malkevich"/><br /><sub><b>Alex Malkevich</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=gund" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/danielsogl"><img src="https://avatars2.githubusercontent.com/u/15234844?v=4" width="100px;" alt="Daniel Sogl"/><br /><sub><b>Daniel Sogl</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=danielsogl" title="Code">💻</a></td>
    <td align="center"><a href="http://www.tailored.hu/"><img src="https://avatars1.githubusercontent.com/u/9606801?v=4" width="100px;" alt="Alex Szabó‮"/><br /><sub><b>Alex Szabó‮</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=kreatemore" title="Code">💻</a></td>
    <td align="center"><a href="http://codepen.io/donroyco/"><img src="https://avatars2.githubusercontent.com/u/1763537?v=4" width="100px;" alt="Roy"/><br /><sub><b>Roy</b></sub></a><br /><a href="https://github.com/NetanelBasal/content-loader/commits?author=donroyco" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
