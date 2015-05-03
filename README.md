# jgdovin:html-pdf

Meteor wrapper for the NPM html-pdf 

## Installation

```
    meteor add jgdovin:html-pdf
```

## Warning
Currently the items under usage do not fully work, I have a work around for these for now as I continue to investigate issues with passing buffers between server and client

For now you may call from the client:
```
Meteor.pdf.save('<h1>My Cool Pdf</h1>', 'myFileName');
```

this will process your pdf and automatically save the file to the client in a pdf file format.

## usage

Either call asynchronous calls from the html-pdf library with the defined pdf variable. See the library here: https://www.npmjs.com/package/html-pdf

Additional methods have been added to wrap these in a synchronous way to receive the data back to the browser

To receive a buffer:
```
var html = '<h1>My cool html</h1>';
Meteor.pdf.buffer(html, function(result) {
    console.log(result);
  });
```

To receive a stream:
```
var html = '<h1>My cool html</h1>';
Meteor.pdf.stream(html, function(result) {
    console.log(result);
  });
```

You may also pass in a blaze template with the following:
```
 var html = Blaze.toHTML(Blaze.With(template.data, function () {
      return Template.QuotePrint;
    }));
```