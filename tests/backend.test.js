const { setupServer } = require('../src/backend');
const express = require('express');

describe('Backend Tests - setupServer Function', () => {
    let servers = [];
    let originalConsoleLog;

    beforeEach(() => {
        // Suppress console.log trong test để tránh warning
        originalConsoleLog = console.log;
        console.log = jest.fn();
    });

    afterEach((done) => {
        // Khôi phục console.log
        console.log = originalConsoleLog;
        
        // Đóng tất cả servers sau mỗi test
        const closePromises = servers.map(server => {
            return new Promise((resolve) => {
                if (server && server.listening) {
                    server.close(() => {
                        resolve();
                    });
                } else {
                    resolve();
                }
            });
        });
        
        Promise.all(closePromises).then(() => {
            servers = [];
            done();
        });
    });

    // Test 1: Kiểm tra hàm setupServer được định nghĩa
    test('setupServer function should be defined', () => {
        expect(setupServer).toBeDefined();
        expect(typeof setupServer).toBe('function');
    });

    // Test 2: Kiểm tra hàm trả về server instance
    test('should return server instance', () => {
        const server = setupServer(0); // Port 0 = random available port
        expect(server).toBeDefined();
        expect(server).toHaveProperty('listen');
        expect(server).toHaveProperty('close');
        servers.push(server);
    });

    // Test 3: Kiểm tra server có thể đóng được
    test('should return closable server instance', (done) => {
        const server = setupServer(0);
        servers.push(server);
        
        expect(server).toBeDefined();
        
        server.close(() => {
            expect(server.listening).toBe(false);
            // Remove server khỏi array sau khi đóng
            const index = servers.indexOf(server);
            if (index > -1) {
                servers.splice(index, 1);
            }
            done();
        });
    });

    // Test 4: Kiểm tra hàm có thể được gọi với port tùy chỉnh
    test('should accept custom port parameter', () => {
        const server = setupServer(0);
        expect(server).toBeDefined();
        servers.push(server);
    });
});

