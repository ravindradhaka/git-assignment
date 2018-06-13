var http = require('http'),
    urls = [];

for (var i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
}

callback_1(urls[0], function () {
    callback_1(urls[1], function () {
        callback_1(urls[2], function () {
            // End
        });
    });
});

function callback_1(url, callback) {
    var result = '';

    http.get(url, function (res) {
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            result += chunk;
        });

        res.on('end', function () {
            console.log(result);
            callback();
        });
    });
}