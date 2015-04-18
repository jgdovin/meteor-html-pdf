if(Meteor.isClient) {
  Meteor.pdf = {
    buffer : function(html, cb) {
      Meteor.call('pdfBuffer', html, function(err, result) {
        cb(result);
      });
    },
    stream : function(html, cb) {
      Meteor.call('pdfStream', html, function(err, result) {
        cb(result);
      });
    }
  };
}
