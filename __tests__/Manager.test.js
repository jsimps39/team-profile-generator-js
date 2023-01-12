const Manager = require("../lib/Manager");

describe("Manager", () => {
    it ('should have a phone number', () => {
        const manager = new Manager('Guy', 1, 'fun@guy.com', 'phoneNumber');
        expect(manager.getNumber).toEqual('phoneNumber');
    });
    it ('should have a role of manager', () => {
        const manager = new Manager('Guy', 1, 'fun@guy.com', 'phoneNumber');
        expect(manager.getRole()).toEqual('Manager');
    });
    //it should have a role of manager with same lines as abouve ^
});

