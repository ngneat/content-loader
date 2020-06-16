# Ngx Content Loader

Angular component that uses SVG to create a collection of loaders which simulates the structure of the
content that will be loaded, similar to Facebook cards loaders.

## Features

This is forked from [content-loader](https://github.com/ngneat/content-loader).

- :gear: **Completely customizable:** you can change the colors, speed and sizes
- :pencil2: **Create your own loading:** create custom loaders easily
- :ok_hand: **You can use right now:** there are a lot of presets to use the loader
- :rocket: **Performance:** uses pure SVG to work, so it works without any extra scripts

## Install

### NPM

```bash
npm install @Muserk-team/ngx-content-loader
```

## Usage

```ts
import { ContentLoaderModule } from '@Muserk-team/ngx-content-loader';

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

### Card Style

```html
<card-content-loader></card-content-loader>
```

### List Style

```html
<list-content-loader></list-content-loader>
```

### Bullet list Style

```html
<bullet-list-content-loader></bullet-list-content-loader>
```

> Warning: Safari renders the SVG in black in case your Angular application uses the `<base href="/" />` tag in the `<head/>` of your `index.html`.
> Refer to the input property `baseUrl` below to fix this issue.


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

Forked from  [content-loader](https://github.com/ngneat/content-loader).

## License

MIT

## Contributors

Original project [contributors](https://github.com/ngneat/content-loader):
