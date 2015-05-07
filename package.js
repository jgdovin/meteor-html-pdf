Package.describe({
  name: "jgdovin:html-pdf",
  summary: "Meteor wrapper for the NPM html-pdf",
  version: "0.1.2",
  git: "https://github.com/jgdovin/meteor-html-pdf"
});

Npm.depends({
  "html-pdf": "1.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['templating', 'mongo'], 'client');
  api.use(['mongo'], 'server');
  api.use('pfafman:filesaver@0.1.0');

  api.addFiles([
    'server/html-pdf.js',
  ], ['server']);
  api.addFiles([
    'client/subscription.js'
  ], ['client']);
  api.addFiles([
    'lib/index.js',
    'lib/permissions.js'
  ], ['server', 'client']);

  api.export([
    'pdf',
    'PdfCollection'
  ]);
});



  
    
    
  