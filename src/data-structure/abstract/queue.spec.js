const { expect } = require('chai');
const Queue = require('./queue');

describe('Queue', function () {
  let queue;

  beforeEach(function () {
    queue = new Queue();
  });

  describe('#enqueue', function () {
    it('can enqueue 3 values into queue', function () {
      expect(queue.enqueue('One')).to.equal(1);
      expect(queue.enqueue('Two')).to.equal(2);
      expect(queue.enqueue('Three')).to.equal(3);
    });
  });

  describe('#dequeue', function () {
    it('can dequeue 3 values from queue', function () {
      queue.enqueue('One');
      queue.enqueue('Two');
      queue.enqueue('Three');

      expect(queue.dequeue()).to.equal('One');
      expect(queue.dequeue()).to.equal('Two');
      expect(queue.dequeue()).to.equal('Three');
      expect(queue.size).to.equal(0);
    });
  });
});
