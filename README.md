# grunt-bundler

> Bundle and insert css and js files into html

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bundler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bundler');
```

## The "bundler" task

### Overview
In your project's Gruntfile, add a section named `bundler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bundler: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage Examples

#### Default Options
In this example, javascript and css files will be injected into index.html when the bundler task is executed

```js
grunt.initConfig({
  bundler: {
    bundle: {
      root: 'src',  // optional - defaults to ''
      views: ['index.html'],
      bundles: {
        'css': {
          type: 'css',
          files: ['css/*.css']
        },
        'js': {
          type: 'js',
          files: ['js/*.js']
        },
      }
    }
  },
});
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <!-- bundle name="css" -->
    <!-- /bundle -->
</head>
<body>
    <!-- bundle name="js" -->
    <!-- /bundle -->
</body>
</html>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
