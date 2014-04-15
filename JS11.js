// PART I
/** Given a day number from 0 to 6, return the full day of the week for that number. */
var getDayName = function(dayNumber) {
 var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 return dayNames[dayNumber];
};


// PART II
// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 for(var i=0; i<arr.length; i++) {
 	if (i === arr.length - 1 || delimeter === undefined) {
 		output += arr[i];
 	}
 	else {
 		output += arr[i] + delimeter;
 	}
 }
 	return output;
};



// BONUS
var map = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  output.push(f(arr[i]));
  return output;
 }
};

var filter = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  if(f(arr[i])) {
   output.push(i);
  }
  return output;
 }
};