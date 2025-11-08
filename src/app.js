console.log('MyProject Application');

function initializeUI() {
    console.log('UI Initialized');
    const header = document.createElement('h1');
    header.textContent = 'Welcome to MyProject';
    return header;
}

module.exports = { initializeUI };