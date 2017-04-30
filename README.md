# latest-lib-cli [![Build Status](https://travis-ci.org/GabrielMangiurea/latest-lib-cli.svg?branch=master)](https://travis-ci.org/GabrielMangiurea/latest-lib-cli)

> Get the latest version of a CSS or JavaScript library hosted on CDNJS


## Install

```
$ npm install --global latest-lib-cli
```


## Usage

```
$ latest-lib --help
Usage:
  $ latest-lib <name> [--only <css/js>]

Options:
  --only, -o  Return only the CSS/JavaScript files of the library in the
              response
  --help      Show this screen
  --version   Show version number

Examples:
  $ latest-lib jquery
  $ latest-lib jquery@2
  $ latest-lib bootstrap --only css
  $ latest-lib bootstrap --only js
```


## Related

- [latest-lib](https://www.npmjs.com/package/latest-lib) - API for this module


## License

MIT &copy; [Gabriel Mangiurea](https://gabrielmangiurea.github.io)
