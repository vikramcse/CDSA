var Stack = require('../../').DS.Stack;
var assert = require('chai').assert;

describe('Testing Stack', function () {
  it('should start empty', function() {
    var s = new Stack();
    assert(s.isEmpty());
    assert.equal(s.getSize(), 0);
  });

  it('Adding elements to Stack', function() {
    var s = new Stack();
    s.push(1);
    s.push(2);
    s.push('Three');
    s.push(4.0);

    assert.equal(s.getSize(), 4);
    assert.equal(s.isEmpty(), false);
  });

  it('Removing elements to Stack', function() {
    var s = new Stack();
    s.push(1);
    s.push(2);
    s.push('Three');
    s.push(4.0);

    s.pop();
    var popped = s.pop();

    assert.equal(popped, 'Three');
    assert.equal(s.getSize(), 2);
    assert.equal(s.isEmpty(), false);

    s.reset();
    assert.equal(s.getSize(), 0);
    assert.equal(s.isEmpty(), true);
  });

  it('Peeking elements to Stack', function() {
    var s = new Stack();
    s.push(1);
    s.push(2);
    s.push('Three');
    s.push(4.0);

    var peeked = s.peek();

    assert.equal(peeked, 4.0);
    assert.equal(s.getSize(), 4);
    assert.equal(s.isEmpty(), false);
  });

  it('testing forEach to stack', function() {
    var s = new Stack();
    s.push(1);
    s.push(2);
    s.push('Three');
    s.push(4.0);

    s.forEach(function(item, index, stack) {
      assert.equal(s, stack);

      if (index === stack.getSize() - 1) {
        assert.equal(s.peek(), 4.0);
      }
    });
  });


});