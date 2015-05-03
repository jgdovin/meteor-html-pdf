pdf = Npm.require('html-pdf');


Meteor.startup(function() {
  pdfBuffer = function (html, cb) {
    pdf.create(html).toBuffer(Meteor.bindEnvironment(function (err, buffer) {
      cb && cb(null, buffer);
      return buffer;
    }));
  };
});

Meteor.methods({
  pdfStream : function(html) {
    var pdfStream = function (html, cb) {
      pdf.create(html).toStream(Meteor.bindEnvironment(function (err, buffer) {
        cb && cb(null, buffer);
        return;
      }));
    };

    var stream = Meteor.wrapAsync(pdfStream);

    try {
      var result = stream(html);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  pdfBuffer : function(html) {
    var buffer = Meteor.wrapAsync(pdfBuffer);

    try {
      var result = buffer(html);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  pdfCollection : function(html) {
    var buffer = Meteor.wrapAsync(pdfBuffer);

    try {
      var result = buffer(html);
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