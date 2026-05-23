const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// public klasöründeki statik dosyaları (index.html, CSS vb.) dışarı açıyoruz
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Kelimeleri Frontend'e gönderen API rotamız
app.get('/api/kelimeler', (req, res) => {
    // data klasöründeki kelimeler.json dosyasının yolunu bul
    const dataPath = path.join(__dirname, 'data', 'kelimeler.json');
    
    // JSON dosyasını oku ve frontend'e gönder
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error("Dosya okuma hatası:", err);
            res.status(500).json({ error: 'Kelimeler yüklenirken bir hata oluştu.' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`🚀 İspanyolca platformu ayağa kalktı! Tarayıcıda http://localhost:${PORT} adresine git.`);
});