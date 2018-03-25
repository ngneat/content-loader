# ngx-content-loader

SVG component to create placeholder loading, like Facebook cards loading.

![preview](https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif)

[Live Demo](https://stackblitz.com/edit/ngx-content-loader)
## Features

This is an Angular port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

- Completely customizable: you can change the colors, speed and sizes.
- Create your own loading: use the [online tool](https://danilowoz.github.io/create-react-content-loader/) to create your custom loader easily.
- You can use it right now: there are a lot of presets already.
- Performance:
  - Tree-shakable and highly optimized bundle.
  - Pure SVG, so it's works without any javascript, canvas, etc.

## Install

```bash
yarn add @netbasal/ngx-content-loader
```

## Usage

```ts
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';

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

### Built-in loaders

```html
<bullet-list-content-loader></bullet-list-content-loader>
<facebook-content-loader></facebook-content-loader>
<list-content-loader></list-content-loader>
```

## API

### @Inputs


|Input|Type|Default|Description|
|---|---|---|---|
|width|number|`400`||
|height|number|`130`||
|speed|number|`2`||
|preserveAspectRatio|string|`'xMidYMid meet'`||
|primaryColor|string|`'#f9f9f9'`||
|secondaryColor|string|`'#ecebeb'`||
|uniqueKey|string|`randomId()`|Unique ID, you need to make it consistent for SSR|

## Credits

This is basically an Angular port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

## License

MIT &copy; [NetanelBasal](https://github.com/NetanelBasal)
