var Queue = require('../../').DS.Queue;
var assert = require('chai').assert;

describe('Testing Queue', function () {
  it('should start empty', function () {
    var q = new Queue();

    assert(q.isEmpty());
    assert.equal(q.getSize(), 0);
  });

  it('Adding elements to queue', function () {
    var q = new Queue();
    q.add(1);
    q.add(2);
    q.add(4.0);

    assert.equal(q.getSize(), 3);
    assert.equal(q.isEmpty(), false);
  });

  it('get the front element from the queue', function () {
    var q = new Queue();
    q.add(1);
    q.add(2);
    q.add('Three');
    q.add(4.0);

    assert.equal(q.peek(), 1);
  });


  it('Removing elements to Queue', function() {
    var q = new Queue();
    q.add(1);
    q.add(2);
    q.add('Three');
    q.add(4.0);

    var popped = q.remove();

    assert.equal(popped, 1);
    assert.equal(q.getSize(), 3);
    assert.equal(q.isEmpty(), false);
  });

  it('Removing elements to Queue and get the front element', function() {
    var q = new Queue();
    q.add(1);
    q.add(2);
    q.add('Three');
    q.add(4.0);

    q.remove();

    assert.equal(q.peek(), 2);

  });


  it('testing forEach to queue', function() {
    var q = new Queue();
    q.add(1);
    q.add(2);
    q.add('Three');
    q.add(4.0);

    q.forEach(function(item, index, queue) {
      assert.equal(q, queue);

      if (index === queue.getSize() - 1) {
        assert.equal(q.peek(), 1);
      }
    });
  });

  it('convert the queue into string', function() {
    var q = new Queue();
    q.add(1);
    q.add(2);
    q.add('Three');
    q.add(4.0);

    assert.equal(q.toString(), '1,2,Three,4');
  });
});