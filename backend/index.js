'use strict';
const express = require('express');
const app = express();







const server = app.listen(4417, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
})