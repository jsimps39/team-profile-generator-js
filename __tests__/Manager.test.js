const Manager = require("../lib/Manager");

describe("Manager", () => {
    it ('should have an office number', () => {
        const manager = new Manager('Guy', 1, 'fun@guy.com', 123);
        expect(manager.getOfficeNumber()).toEqual(123);
    });
});

