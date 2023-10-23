const expect = require('chai').expect;

const { should } = require('chai');
const {Users} = require('./user');

describe('User', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: "1",
            name: "Yash",
            room: "The Office Fans"
        },{
            id: "2",
            name: "Yash12",
            room: "Scrubs Fans"
        },{
            id: "3",
            name: "Yash1234",
            room: "The Office Fans"
        }]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: "abcdefg",
            name: "Yash",
            room: "The Office Fans"
        };

        let reUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).to.eql([user]);
    });

    it('should return names for the office fans', () => {
        let userList = users.getUserList('The Office Fans');

        expect(userList).to.eql(['Yash', 'Yash1234']);
    });

    it('should return names for the scrubs fans', () => {
        let userList = users.getUserList('Scrubs Fans');

        expect(userList).to.eql(['Yash12']);
    });

    it('should find user', () => {
        let userID = '2',
            user = users.getUser(userID);

        expect(user.id).to.equal(userID);
    });

    it('should not find user', () => {
        let userID = '120',
            user = users.getUser(userID);

        expect(user).to.be.an('undefined');
    });

    it('should remove a user', () => {
        let userID = '1',
            user = users.removeUser(userID);

        expect(user.id).to.eql(userID);
        expect(users.users.length).to.eql(2);
    });

    it('should not remove a user', () => {
        let userID = '140',
            user = users.removeUser(userID);

        expect(user).to.be.an('undefined');
        expect(users.users.length).to.eql(3);
    });
});