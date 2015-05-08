if (Meteor.isClient) {
    Meteor.pdf = {
        buffer: function (html, cb) {
            Meteor.call('pdfBuffer', html, function (err, result) {
                cb(result);
            });
        },
        stream: function (html, cb) {
            Meteor.call('pdfStream', html, function (err, result) {
                cb(result);
            });
        },
        save: function (html, filename) {
            Meteor.call('pdfCollection', html, function (err, result) {
                if (!result) {
                    console.log(err);
                    return;
                }
                var item = PdfCollection.findOne({_id: result});
                var blob = new Blob([item.pdf], {type: 'application/pdf'});
                saveAs(blob, filename + '.pdf');
                PdfCollection.remove({_id: result})
            });
        }
    };
}

PdfCollection = new Mongo.Collection('htmlPdfCollection');
