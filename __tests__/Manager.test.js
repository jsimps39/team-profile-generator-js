const Manager = require("../lib/Manager");

describe("Manager", () => {
    it ('should have an office number', () => {
        const manager = new Manager('Guy', 1, 'fun@guy.com', 123);
        expect(manager.getOfficeNumber()).toEqual(123);
    });
    it ('should have a role of manager', () => {
        const manager = new Manager('Guy', 1, 'fun@guy.com', 123);
        expect(manager.getRole()).toEqual('Manager');
    });
    //it should have a role of manager with same lines as abouve ^
});

