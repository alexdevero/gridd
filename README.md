<p align="center">
  <a href="https://david-dm.org/alexdevero/gridd"><img alt="Dependency Status" src="https://david-dm.org/alexdevero/gridd.svg?style=flat"></a>
  <a href="https://david-dm.org/alexdevero/gridd?type=dev"><img alt="devDependency Status" src="https://david-dm.org/alexdevero/gridd/dev-status.svg?style=flat"></a>
  <a href="http://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/npm/l/express.svg"></a>
</p>

<p align="center">
  <a href="https://alexdevero.com"><img alt="Built by DEVERO" src="https://img.shields.io/badge/built%20by-DEVERO-brightgreen.svg?colorB=d30320"></a>
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

## Supported browsers:

Gridd works in all major browsers that support the [Flexible Box Layout Module](http://caniuse.com/#feat=flexbox).

| IE    | Google Chrome  | Mozzila Firefox | Safari |
| :---: | :------------: | :-------------: | :----: |
|  +10  |  +45           |  +45            | +8.4   |

## Support this project

<!-- This project is released as an open-source. If you need help with using this project, please ask and I will do my best reply to as soon as possible. You can use this project as you wish *for free*. Also, you can change the source code and redistribute it if you want. -->

Development and maintenance of this project takes a lot of time. If you want to support this project and help its author, there are few ways you can do it:

 - Starring and sharing the project
 - [![Donate](https://img.shields.io/badge/Donate-Paypal-brightgreen.svg?colorB=259cd2)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YKLGUUB34ASEL)—make one-time donations via PayPal.
 - [![Donate](https://img.shields.io/badge/Donate-Patreon-brightgreen.svg?colorB=f86213)](https://www.patreon.com/alexdevero)—set up monthly donation via Patreon and get interesting news about what I'm doing.
 - <img alt="Releases" src="https://img.shields.io/badge/Donate-Bitcoin-brightgreen.svg?colorB=fab915">—send bitcoins or ethereum to this address: `19jHGagJWeVvuNjN3kaBoAszXd9ea9gKzp`.

Thank you!

## Code of Conduct

[Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## License

MIT © [Alex Devero](https://alexdevero.com).
