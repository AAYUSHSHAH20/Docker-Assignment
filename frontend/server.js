const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing form data and JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ✅ Explicitly serve index.html at GET /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Form submission handler that proxies request to Flask backend
app.post('/submit-form', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/submit', req.body);
        res.send(`<p>${response.data.message}</p><a href="/">Go Back</a>`);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error submitting data to Flask backend');
    }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend server running at http://0.0.0.0:${PORT}`);
});
