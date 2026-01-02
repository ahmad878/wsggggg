const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); // needed for req.body

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
