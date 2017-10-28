<p align="center">
  <a href="https://david-dm.org/alexdevero/gridd"><img alt="Dependency Status" src="https://david-dm.org/alexdevero/gridd.svg?style=flat"></a>
  <a href="https://david-dm.org/alexdevero/gridd?type=dev"><img alt="devDependency Status" src="https://david-dm.org/alexdevero/gridd/dev-status.svg?style=flat"></a>
  <a href="https://alexdevero.com"><img alt="Built by DEVERO" src="https://img.shields.io/badge/built%20by-DEVERO-brightgreen.svg?colorB=d30320"></a>
</p>

<p align="center">
  <a href="http://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/npm/l/express.svg"></a>
  <a href="#"><img alt="Releases" src="https://img.shields.io/github/release/alexdevero/gridd.svg"></a>
</p>

# Gridd

When all you need is a simple grid.

## Install
```
$ npm install gridd
```
Or if you prefer using Yarn:
```
$ yarn add gridd
```

Or you can also clone this repo
```
$ git clone https://github.com/alexdevero/gridd.git
```

## Usage

In the [`dist`](/dist) directory there are three minified files:
- gridd.css: unminified version of grid for development
- gridd.min.css: minified version of gridd for use

## Example

Include Gridd CSS file in your page:

```html
<link rel="stylesheet" href="gridd.min.css">
```

Then you can use all available Gridd classes. This example will create two columns with equal widths.

```html
<div class="grid-container">
  <div class="grid-row">
    <div class="grid-col-md-6">Two</div>
    <div class="grid-col-md-6">Column</div>
  </div>
</div>
```

### Supported browsers:

Gridd works in all major browsers that support the [Flexible Box Layout Module](http://caniuse.com/#feat=flexbox).

| IE    | Google Chrome  | Mozzila Firefox | Safari |
| :---: | :------------: | :-------------: | :----: |
|  +10  |  +45           |  +45            | +8.4   |

## Code of Conduct

[Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## License

MIT © [Alex Devero](https://alexdevero.com).
