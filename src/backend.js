const express = require('express');

function setupServer(port = 3000) {
    const app = express();
    const PORT = port;
    
    app.get('/', (req, res) => {
        res.send('Backend is running');
    });
    
    const server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    
    return server;
}

module.exports = { setupServer };