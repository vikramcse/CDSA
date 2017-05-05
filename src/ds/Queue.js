'use strict';

/**
 * Queue
 *
 * Reset all data when initialized
 * @constructor
 */
function Queue() {
  this.reset();
}

/**
 * Returns the size of the queue
 * @returns {number}
 */
Queue.prototype.getSize = function () {
  return this.size;
};

/**
 * Returns true if the queue is empty
 * @returns {boolean}
 */
Queue.prototype.isEmpty = function () {
  return this.size <= 0;
};


/**
 * resets the queue
 */
Queue.prototype.reset = function () {
  this.items = [];
  this.size = 0;
};

/**
 * inserts the value to the end (rear) of the queue
 * Time Complexity: O(1)
 * @param value
 */

Queue.prototype.add = function (value) {
  this.items.push(value);
  this.size++;
};

/**
 * Removes value from the front of the queue
 * Time Complexity: O(1)
 * @returns {*}
 */
Queue.prototype.remove = function () {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  this.size--;
  return this.items.shift();
};

/**
 * Get the element from the front of the queue
 * Time Complexity: O(1)
 * @returns {*}
 */
Queue.prototype.peek = function () {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  return this.items[0];
};

/**
 * Return the Queue into array format
 * @returns {Array.<*>}
 */
Queue.prototype.toArray = function () {
  return this.items;
};

/**
 * Returns string format if the queue
 * @returns {string}
 */
Queue.prototype.toString = function () {
  return this.toArray().join(',');
};

/**
 * This function will provide iterating functionality
 * for queue data structure, we can pass a callback
 * to foreach function
 * @param callback
 */
Queue.prototype.forEach = function (callback) {
  var len = this.items.length;
  var ctx = this;

  for (var i = 0; i < len; i++) {
    // the call takes context, currentItem, index, Queue
    // here this is a current context is queue
    callback.call(ctx, this.items[len - i - 1], i, this);
  }
};

module.exports = Queue;