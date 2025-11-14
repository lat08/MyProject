const { initializeUI } = require('../src/app');

describe('App Tests - initializeUI Function', () => {
    let originalConsoleLog;

    beforeEach(() => {
        // Suppress console.log trong test để tránh warning
        originalConsoleLog = console.log;
        console.log = jest.fn();
    });

    afterEach(() => {
        // Khôi phục console.log
        console.log = originalConsoleLog;
    });
    // Test 1: Kiểm tra hàm tạo được header element
    test('should create header element', () => {
        const header = initializeUI();
        expect(header).toBeDefined();
        expect(header).not.toBeNull();
    });

    // Test 2: Kiểm tra tag name là H1
    test('should create H1 element', () => {
        const header = initializeUI();
        expect(header.tagName).toBe('H1');
    });
    
    // Test 3: Kiểm tra text content chứa "MyProject"
    test('should have correct text content containing MyProject', () => {
        const header = initializeUI();
        expect(header.textContent).toContain('MyProject');
    });

    // Test 4: Kiểm tra className được set đúng
    test('should have correct className', () => {
        const header = initializeUI();
        expect(header.className).toBe('main-header');
    });

    // Test 5: Kiểm tra text content đầy đủ
    test('should have full welcome message', () => {
        const header = initializeUI();
        expect(header.textContent).toBe('Welcome to MyProject - Main');
    });

    // Test 6: Kiểm tra element có thể append vào DOM
    test('should be appendable to DOM', () => {
        const header = initializeUI();
        document.body.appendChild(header);
        expect(document.body.contains(header)).toBe(true);
        document.body.removeChild(header);
    });
});