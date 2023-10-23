let expect = require('chai').expect;

var {generateMessage, generateLocationMessage} = require('./message');

describe('Generate Message', () => {
    it("should generate correct message object", () => {
        let from = "Yash",
            text = "Some random text."
            message = generateMessage(from, text);

        expect(parseInt(typeof message.createdAt)).to.be.a('number');
        expect(message).to.deep.include({from, text});
    });
}); 

describe('Generate Location Message', () => {
    it("should generate correct location object", () => {
        let from = "Yash",
            lat = 27,
            lng = 56,
            url = `https://www.google.com/maps?q=${lat}, ${lng}`,
            message = generateLocationMessage(from, lat, lng);

        expect(parseInt(typeof message.createdAt)).to.be.a('number');
        expect(message).to.deep.include({from, url});
    });
});