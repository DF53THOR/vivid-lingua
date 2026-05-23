const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/api/kelimeler', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'kelimeler.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Hata' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log('Sunucu calisiyor, port: ' + PORT);
});
