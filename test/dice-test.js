const chai = require('chai');
const expect = chai.expect;

const dice =  require('../lib/dice');

describe('dice', () => {
    describe('dice test', () => { 
      it('should return 12', () => { 
        expect(dice.dice()).to.equal(12);        
      });
      it('should return 15', function() {
        expect(dice.dice()).to.equal(15);   
      });
    });
  });