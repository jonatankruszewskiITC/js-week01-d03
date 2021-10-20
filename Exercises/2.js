/**
 * In the function, call the callback function
 * only if callMe is true
 * @param {boolean} callMe
 * @param {Function} callback
 */
function callMeMaybe(callMe, callback) {
  if (callMe === true) {
    callback(callMe);
  }
}

export default callMeMaybe;
