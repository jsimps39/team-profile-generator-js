const Intern = require("../lib/Intern");

describe("Intern", () => {
    it ('should have a school', () => {
        const intern = new Intern('Guy', 1, 'fun@guy.com', 'Harvard');
        expect(intern.getSchool()).toEqual('Harvard');
    });
    it ('should have a role of intern', () => {
        const intern = new Intern('Guy', 1, 'fun@guy.com', 'Harvard');
        expect(intern.getRole()).toEqual('Intern');
    });
});
