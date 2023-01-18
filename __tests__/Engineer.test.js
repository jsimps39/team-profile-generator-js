 const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it ('should have a github', () => {
        const engineer = new Engineer('Guy', 1, 'fun@guy.com', 'funGuy');
        expect(engineer.getGithub()).toEqual('funGuy');
    });
}); 
