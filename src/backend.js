const express = require('express');

function setupServer() {
    const app = express();
    const PORT = 3000;
    
    app.get('/', (req, res) => {
        res.send('Backend is running');
    });
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { setupServer };