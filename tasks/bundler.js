/*
 * grunt-bundler
 * https://github.com/rwhitmire/grunt-bundler
 *
 * Copyright (c) 2015 Ryan Whitmire
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  function processBundles(bundles) {
    var processedBundles = {};

    for(var key in bundles) {
      if (!bundles.hasOwnProperty(key)) {
        continue;
      }

      processedBundles[key] = processBundle(bundles[key]);
    }

    return processedBundles;
  }

  function processBundle(bundle) {
    var processedBundle = {};
    processedBundle.files = grunt.file.expand(bundle.files);
    processedBundle.type = bundle.type;
    return processedBundle;
  }

  function injectViews(viewPaths, processedBundles) {
    for(var i in viewPaths) {
      if (!viewPaths.hasOwnProperty(i)) {
        continue;
      }

      injectView(viewPaths[i], processedBundles);
    }
  }

  function injectView(path, processedBundles) {
    for(var key in processedBundles) {
      if (!processedBundles.hasOwnProperty(key)) {
        continue;
      }

      var literal = /( *|\t*)(<!-- bundle name="{key}" -->)[\d\D]*?(<!-- \/bundle -->)/g.source.replace('{key}', key);
      var expression = new RegExp(literal);
      var htmlContent = grunt.file.read(path);
      var padding = expression.exec(htmlContent)[1];
      var tags = getBundleTags(processedBundles[key], padding);

      htmlContent = htmlContent.replace(expression, '$1$2' + tags + '$3');
      grunt.file.write(path, htmlContent);
    }
  }

  function getBundleTags(processedBundle, padding) {
    var tag = '', tags = '';

    if(processedBundle.type === 'css') {
      tag = '<link rel="stylesheet" href="{fname}">';
    }

    if(processedBundle.type === 'js') {
      tag = '<script src="{fname}"></script>';
    }

    processedBundle.files.forEach(function(fname) {
      tags += '\n' + padding + tag.replace('{fname}', fname);
    });

    tags += '\n' + padding;

    return tags;
  }

  grunt.registerMultiTask('bundler', 'Bundle and insert css and js files into html', function() {
    var viewPaths = grunt.file.expand(this.data.views);
    var processedBundles = processBundles(this.data.bundles);

    injectViews(viewPaths, processedBundles);
  });

};
