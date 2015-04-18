Package.describe({
  name: "jgdovin:html-pdf",
  summary: "Meteor wrapper for the NPM html-pdf",
  version: "0.1.0",
  git: "https://github.com/jgdovin/meteor-html-pdf"
});

Npm.depends({
  "html-pdf": "1.1.0"
});

Package.onUse(function(api) {
  api.addFiles([
    'server/html-pdf.js',
  ], ['server']);
  api.addFiles([
    'lib/index.js'
  ], ['client']);

  api.export([
    'pdf'
  ]);
});



  
    
    
  