const Intern = require("../lib/Intern");

describe("Intern", () => {
    it ('should have a school', () => {
        const intern = new Intern('Guy', 1, 'fun@guy.com', 'UNCC');
        expect(intern.getSchool).toEqual('UNCC');
    });
    it ('should have a role of intern', () => {
        const intern = new Intern('Guy', 1, 'fun@guy.com', 'UNCC');
        expect(intern.getRole).toEqual('Intern');
    });
});
