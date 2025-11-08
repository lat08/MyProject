console.log('MyProject Application - Main Update');

function initializeUI() {
    console.log('UI Initialized - Main version');
    const header = document.createElement('h1');
    header.textContent = 'Welcome to MyProject - Main';
    header.className = 'main-header';
    return header;
}

module.exports = { initializeUI };