const { initializeUI } = require('../src/app');

describe('App Tests', () => {
    test('initializeUI should create header element', () => {
        const header = initializeUI();
        expect(header).toBeDefined();
        expect(header.tagName).toBe('H1');
    });
    
    test('header should have correct text', () => {
        const header = initializeUI();
        expect(header.textContent).toContain('MyProject');
    });
});