const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api/mlbstadiumdata', function (req, res) {
console.log(__dirname);
  fs.readFile('./server/mlbstadiumdata.csv' , 'utf-8', function(err, data) {

    const lines = data.split('\n');
    console.log(lines.length);

    const output = [];

    for(var i = 1; i < lines.length - 1; i++) {
      const line = lines[i].split(',');
      output.push({
        city: line[0],
        name: line[1],
        opened: line[2],
        seatingCapacity: line[3],
        state:line[6],
        team:line[7],
        latitude:line[8],
        longitude: line[9],
      });
    }

    res.send({
      mlbstadiumdata: output
    });

  })

});

// app.get('*', function(request, response) {
//   response.sendfile('/App.js');
// });

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
