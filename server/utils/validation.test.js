const expect = require('chai').expect;

const {isRealString} = require('./isRealString');

describe('Is Real String', () => {
    it('should reject non-string values', () => {
        let res = isRealString(45);
        expect(res).to.be.a(false);
    });

    it('should reject string with only spaces', () => {
        let res = isRealString('     ');
        expect(res).to.be.a(false);
    });

    it('should allow string with non-space chars', () => {
        let res = isRealString('    yash     ');
        expect(res).to.be.a(true);
    });
})