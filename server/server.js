const express = require ('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(_dirname, '../react-ui/build')));

app.get('/api/data', function (req, res) {
  fs.readFile(_dirname + 'data.csv', 'utf-8', function(err, data) {

    const lines = data.split('\n');

    const output =[];

    for (var i=1; i< lines.length -1; i++){
      const line = lines[i].split(',');
      output.push({
        name: line[0],
        team: line[1],
        position: line[2],
        birthdate: line[3],
        age: line[4]
      });
    }

    res.send({
      players: output
    });

  })

});

app.get('*', function(request, response){
  response.sendFile(path.resolve(_dirname, '../react-ui-build', 'index.html'));
});
