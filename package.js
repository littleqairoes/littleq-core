Package.describe({
  name: 'littleq:littleq-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Library core packages for the project-potential project',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    // Basic
    "meteor-base@1.0.1",
    "mongo@1.1.2",
    "blaze-html-templates@1.0.1",
    "session@1.1.1",
    "jquery@1.11.4",
    "tracker@1.0.9",
    "standard-minifiers@1.0.1",
    "es5-shim@4.1.13",
    "ecmascript@0.1.5",
    // Extra Basic
    "reactive-var@1.0.6",
    "http@1.1.1",
    "email@1.0.7",
    "natestrauser:jquery-scrollto@1.4.7",
    "chuangbo:cookie@1.1.0",
    "less@1.0.14",
    "underscore@1.0.3",
    // Collection helpers
    "aldeed:simple-schema@1.3.3",
    "aldeed:collection2@2.3.3",
    "matb33:collection-hooks@0.7.13",
    "dburles:collection-helpers@1.0.3",
    // Text formaters
    "chuangbo:marked@0.3.2_4",
    "ongoworks:speakingurl@5.0.1",
    "momentjs:moment@2.10.6",
    "djedi:sanitize-html@1.7.0",
    // Meteorhacks/Kadira
    "meteorhacks:fast-render@2.7.1",
    "meteorhacks:subs-manager@1.5.2",
    "meteorhacks:zones@1.6.0",
    "kadira:flow-router@2.0.2",
    "kadira:blaze-layout@2.0.0"
  ]  
  // api.addFiles('littleq-core.js');
  api.use(packages);
  api.imply(packages);

  api.addFiles([
    "lib/core.js",
    "lib/utils.js",
    "lib/deep.js"
  ], ["client", "server"])

  api.export([
    "LittleQCore",
    "_"
  ])
});

Package.onTest(function(api) {
  // api.use('ecmascript');
  // api.use('tinytest');
  // api.use('littleq:littleq-core');
  // api.addFiles('littleq-core-tests.js');
});
