const app = require('express')();
import os from 'os'

const appid= process.env.PORT

app.get('/', function (req, res) {
  res.send(`version 2.0.0: called from ${os.hostname}: listening on port ${appid} `);
});
app.listen(appid, function () {
  console.log(`Example app listening on port ${appid}!`);
});