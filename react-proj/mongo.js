const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

process.on('SIGTERM', () => {
    server.close(() => {
      setTimeout(() => {
        process.exit(0);
      }, 1000);
    });
});