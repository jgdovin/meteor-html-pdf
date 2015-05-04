pdf = Npm.require('html-pdf');

Meteor.methods({
    pdfStream: function (html) {
        var pdfCreateStream = function (html, cb) {
            pdf.create(html).toStream(cb);
        };

        var stream = Meteor.wrapAsync(pdfCreateStream);

        try {
            var result = stream(html);
            return result;
        } catch (e) {
            console.log(e);
        }
    },
    pdfBuffer: function (html) {
        pdfCreateBuffer = function (html, cb) {
            pdf.create(html).toBuffer(cb);
        };

        var buffer = Meteor.wrapAsync(pdfCreateBuffer);

        try {
            var result = buffer(html);
            return result;
        } catch (e) {
            console.log(e);
        }
    },
    pdfCollection: function (html) {
        pdfCreateBuffer = function (html, cb) {
            pdf.create(html).toBuffer(cb);
        };

        var buffer = Meteor.wrapAsync(pdfCreateBuffer);

        try {
            var result = buffer(html);
            var resultId = PdfCollection.insert({pdf: result});
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