Package.describe({
  name: 'romejiang:bs-theme-flatlab',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Flatlab is new model of admin dashboard, build with Bootstrap 3.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/romejiang/bs-theme-flatlab',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use("less");
  api.use("jquery");
  // api.use("twbs:bootstrap");
  // api.mainModule('bs-theme-flatlab.js');

  api.addAssets([
    'font/fontawesome-webfont.eot',
    'font/fontawesome-webfont.svg',
    'font/fontawesome-webfont.ttf',
    'font/fontawesome-webfont.woff',
    'font/FontAwesome.otf',
  ],'client');

  api.add_files([
    'less/font-awesome.less',
    'styles/bootstrap-reset.css',
    'styles/style.css',
    'styles/style-responsive.css',
  ],'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('romejiang:bs-theme-flatlab');
  api.mainModule('bs-theme-flatlab-tests.js');
});
