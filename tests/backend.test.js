const { setupServer } = require('../src/backend');
const express = require('express');

describe('Backend Tests - setupServer Function', () => {
    let server;
    let app;

    beforeEach(() => {
        // Tạo app mới cho mỗi test
        app = express();
    });

    afterEach(() => {
        // Đóng server sau mỗi test
        if (server) {
            server.close();
        }
    });

    // Test 1: Kiểm tra hàm setupServer được định nghĩa
    test('setupServer function should be defined', () => {
        expect(setupServer).toBeDefined();
        expect(typeof setupServer).toBe('function');
    });

    // Test 2: Kiểm tra hàm có thể được gọi mà không lỗi
    test('should be callable without errors', () => {
        expect(() => {
            setupServer();
        }).not.toThrow();
    });

    // Test 3: Kiểm tra hàm trả về undefined (vì không return gì)
    test('should not return a value', () => {
        const result = setupServer();
        expect(result).toBeUndefined();
    });
});

