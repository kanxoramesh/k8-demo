const app = require('express')();

const appid= process.env.PORT

app.get('/', function (req, res) {
  res.send(`Rep ?? called ${appid}: listening on port ${appid} `);
});
app.listen(appid, function () {
  console.log(`Example app listening on port ${appid}!`);
});