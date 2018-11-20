# ease-preview

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This module will create a canvas element which can be used to visualize easing equations. Example output:

![Ease Preview](https://github.com/Jam3/ease-preview/raw/master/preview.png)

## Usage

[![NPM](https://nodei.co/npm/ease-preview.png)](https://www.npmjs.com/package/ease-preview)

### `var canvas = require('ease-preview)(easefunc, [opts])`

Pass in an ease function you'd like to preview the ease function should accept a value between 0-1 and return a value between 0-1 (the same format as the [`eases`](http://www.npmjs.com/eases) module).

`ease-preview` also accepts a second options object with the following options:
- `canvas` canvas you'd like to render the ease equation into. If no canvas is supplied a new canvas will be created.
- `width` width of the canvas element if no canvas element is passed. Default value `200`
- `height` height of the canvas element if no canvas element is passed. Default value `200`
- `styleBackground` the fill style of the background. Default value `'#FFF'`
- `styleEase` the stroke style of the ease line. Default value `'#000'`
- `styleBoundary` the stroke style of the lines that indicate 0 and 1 on graphic. Default value `'#CCC'`
- `widthEase` the stroke width of the ease line. Default value `1`
- `widthBoundary` the stroke width of the boundary lines. Default value `1`
- `shouldRenderBoundary` whether boundary lines should be rendered. Default value `true`
- `boundarySize` how many pixels should be allocated to render beyond 0 and 1. Default value `100`

## License

MIT, see [LICENSE.md](http://github.com/mikkoh/ease-preview/blob/master/LICENSE.md) for details.
