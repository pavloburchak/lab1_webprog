var fs = require('fs'),
    html5Lint = require('html5-lint');

fs.readFile('auto5.html', 'utf8', function (err, html) {
    if (err)
        throw err;

    html5Lint(html, function (err, results) {
        results.messages.forEach(function (msg) {
            var type = msg.type, // error or warning 
                message = msg.message;

            console.log("HTML5 Lint [%s]: %s", type, message);
        });
    });
});