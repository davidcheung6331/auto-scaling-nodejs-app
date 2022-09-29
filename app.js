const express = require('express');
const app = express();
const port = 3000;

// define only 1 route by express
app.get('/', (req, res) => {
    res.send('<h1>Auto Scaling NodeJs Application</h1><h4>being with me , my beloved wife, I am going out soon la, to bank to deposit the cheque.</h4>')
})

// define the port no 
app.listen(port, () => {
    console.log(`Express Web server listening port : ${port}`);
})


// just little revise the command