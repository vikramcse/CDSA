/**
 * Stack
 *
 * Reset all data when initialized
 * @constructor
 */

function Stack() {
  this.reset();
}


/**
 * Returns true if the stack is empty
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function() {
  return this.size <= 0;
};


/**
 * Returns the size of the stack
 * @returns {number}
 */
Stack.prototype.getSize = function() {
  return this.size;
};


/**
 * Resets the Stack
 */
Stack.prototype.reset = function() {
  this.items = [];
  this.size = 0;
};


/**
 * Insert an element into the stack
 * @param {any} value - item to be inserted
 * @returns {number} length of the stack after insertion
 */
Stack.prototype.push = function(value) {
  this.items.push(value);
  return ++this.size;
};


/**
 * Removes element from the top of the Stack
 * @returns {any} removed item
 */
Stack.prototype.pop = function() {
  this.size--;
  return this.items.pop();
};


/**
 * Get the top element form the Stack
 * @returns {any} last item
 */
Stack.prototype.peek = function() {
  return this.items[this.size - 1];
};


/**
 * Return the Stack into array format
 * @returns {Array.<*>}
 */
Stack.prototype.toArray = function() {
  return this.items.slice(0).reverse();
};


module.exports = Stack;