const express = require('express');
const app = express();
const { requestsRouter, lockersRouter, accountsRouter } = require('./routes/mod');
const port = require('./config.json').port || 3000;

app.use(express.json());
app.use('/requests', requestsRouter);
app.use('/lockers', lockersRouter);
app.use('/accounts', accountsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));