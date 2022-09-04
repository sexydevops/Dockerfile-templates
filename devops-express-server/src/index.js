const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const {
  getPrivateIPV4,
  crashServer,
} = require('./lib')

app.get('/server-info', (req, res) => {
  const PrivateIPV4 = getPrivateIPV4() || null;
  const info = [`Private IPv4: ${PrivateIPV4}`]
  res.send(info.join("\n"));
})

app.get('/nok502', (_, res) => {
  res.status(502).send('Error: 502');
})

app.get('/ok200', (_, res) => {
  res.status(200).send('Success');
})

app.get('/crash-fast', (_, res) => {
  crashServer(0);
})

app.get('/crash-slow', (_, res) => {
  crashServer(50000);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})