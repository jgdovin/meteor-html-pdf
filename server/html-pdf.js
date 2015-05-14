pdf = Npm.require('html-pdf');


Meteor.startup(function() {
  pdfBuffer = function (html, options, cb) {
    pdf.create(html, options).toBuffer(Meteor.bindEnvironment(function (err, buffer) {
      cb && cb(null, buffer);
      return buffer;
    }));
  };
});

Meteor.methods({
  pdfStream : function(html, options) {
    var pdfStream = function (html, options, cb) {
      pdf.create(html).toStream(Meteor.bindEnvironment(function (err, buffer) {
        cb && cb(null, buffer);
        return;
      }));
    };

    var stream = Meteor.wrapAsync(pdfStream);

    try {
      var result = stream(html, options);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  pdfBuffer : function(html, options) {
    var buffer = Meteor.wrapAsync(pdfBuffer);

    try {
      var result = buffer(html, options);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  pdfCollection : function(html, options) {
    var buffer = Meteor.wrapAsync(pdfBuffer);

    try {
      var result = buffer(html, options);
      var resultId = PdfCollection.insert({pdf:result});
      return resultId;
    } catch (e) {
      console.log(e);
    }
  }
});

//we need a publication to keep pdfs inside of.
Meteor.publish("htmlPdfCollection", function () {
  return PdfCollection.find();
});