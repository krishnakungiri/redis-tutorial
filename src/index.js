const express = require('express');

const movieRouter = require('./routes/movieRouter');

const app = express();

app.use('/movie/', movieRouter);

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});