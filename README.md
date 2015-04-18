# jgdovin:html-pdf

Meteor wrapper for the NPM html-pdf 

## Installation

```
    meteor add jgdovin:html-pdf
```

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