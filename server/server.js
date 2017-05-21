const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api/parks', function (req, res) {
console.log(__dirname);
  fs.readFile('./server/parks.csv' , 'utf-8', function(err, data) {

    const lines = data.split('\n');
    console.log(lines.length);

    const output = [];

    for(var i = 1; i < lines.length - 1; i++) {
      const line = lines[i].split(',');
      output.push({
        parkname: line[1],
        city: line[3],
        state: line[4],
      });
    }

    res.send({
      park: output
    });

  })

});

// app.get('*', function(request, response) {
//   response.sendfile('/App.js');
// });

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
