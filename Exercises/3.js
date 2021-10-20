/**
 * use a simple for loop (not for...of or for...in) to call the callback over each element in the array
 * passing to the callback as arguments the item it self as first argument, and the index as second
 * @param {number[]} array
 * @param {Function} callback
 */
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

export default forEach;
