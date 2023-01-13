const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('should have a name', () => {
        const employee = new Employee('Guy', 1, 'fun@guy.com');
        expect(employee.name).toEqual('Guy');
    });
    it ('should have an id', () => {
        const employee = new Employee('Guy', 1, 'fun@guy.com');
        expect(employee.id).toEqual(1);
    });
    it ('should have an email', () => {
        const employee = new Employee('Guy', 1, 'fun@guy.com');
        expect(employee.email).toEqual('fun@guy.com');
    });
    it ('should have a role', () => {
        const employee = new Employee('Guy', 1, 'fun@guy.com');
        expect(employee.getRole()).toEqual('Employee');
    });

});
