import {
  expect
} from 'chai';

describe('A BDD test', () => {

  describe('when run', () => {

    it('should read like a sentence', () => {
      expect(true).to.equal(true);
    });
  });

  describe('when failing', () => {
    it('should generate an error', () => {
      const result = false;

      expect(result).to.be.true;
    });
  });
});
