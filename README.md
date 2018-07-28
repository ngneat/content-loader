# Angular Content Loader

<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

Angular component that uses SVG to create a collection of loaders which simulates the structure of the
content that will be loaded, similar to Facebook cards loaders.

[Live Demo](https://stackblitz.com/edit/ngx-content-loader)
## Features

This is an Angular port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

* :gear: **Completely customizable:** you can change the colors, speed and sizes;
* :pencil2: **Create your own loading:** use the
  [create-react-content-loader](https://danilowoz.github.io/create-react-content-loader/) to create
  your custom loadings easily;
* :ok_hand: **You can use right now:** there are a lot of presets to use the loader, see the
  [options](#examples);
* :rocket: **Performance:** uses pure SVG to work, so it works without any extra scripts,
  canvas, etc;

## Install

### Yarn
```bash
yarn add @netbasal/content-loader
```

### Npm
```bash
npm install @netbasal/content-loader
```

### Angular 6
```bash
npm install @netbasal/content-loader@next
```

## Usage

```ts
import { ContentLoaderModule } from '@netbasal/content-loader';

@NgModule({
  imports: [
    ContentLoaderModule
  ]
})
export class AppModule { }
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


|Input|Type|Default|Description|
|---|---|---|---|
|animate|boolean|`true`|`false` to render with no animation|
|width|number|`400`||
|height|number|`130`||
|speed|number|`2`||
|preserveAspectRatio|string|`'xMidYMid meet'`||
|primaryColor|string|`'#f9f9f9'`||
|secondaryColor|string|`'#ecebeb'`||
|primaryOpacity|number|`1`||
|secondaryOpacity|number|`1`||
|uniqueKey|string|`randomId()`|Unique ID, you need to make it consistent for SSR|

## Credits

This is basically an Angular port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

## License

MIT &copy; [NetanelBasal](https://github.com/NetanelBasal)
