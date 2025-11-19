const express = require('express'); 
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request for ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/namaguru', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res, next) => {
    res.status(404); 
    
    const errorFilePath = path.join(__dirname, '404.html');

    res.sendFile(errorFilePath, (err) => {
        if (err) {
            console.error('Error sending custom 404 page:', err.message);
            res.type('text/plain').send('404 Not Found'); 
        }
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
    console.log('Tekan CTRL+C untuk menghentikan server.');
});
