if(Meteor.isClient) {
  Meteor.pdf = {
    buffer : function(html, options, cb) {
      if (arguments.length === 1) {
        options = {};
      }
      if (arguments.length === 2 && typeof options === 'function') {
        cb = options;
        options = {};
      }

      Meteor.call('pdfBuffer', html, options, function(err, result) {
        cb(result);
      });
    },
    stream : function(html, options, cb) {
      if (arguments.length === 1) {
        options = {};
      }
      if (arguments.length === 2 && typeof options === 'function') {
        cb = options;
        options = {};
      }

      Meteor.call('pdfStream', html, options, function(err, result) {
        cb(result);
      });
    },
    save : function(html, filename, options, cb) {
      if (arguments.length === 2){
        options = {};
      }
      if (arguments.length === 3 && typeof options === 'function') {
        cb = options;
        options = {};
      }
      return Meteor.call('pdfCollection', html, options, function(err, result) {
        var item = PdfCollection.findOne({_id : result});
        var blob = new Blob([item.pdf], {type: 'application/pdf'});
        var res = saveAs(blob, filename + '.pdf');
        PdfCollection.remove({_id: result});
        cb(err, res);
      });
    }
  };
}

PdfCollection = new Mongo.Collection('htmlPdfCollection');
