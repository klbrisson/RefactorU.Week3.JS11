// PART I
describe('getDayName', function() {
 it('should return Sunday for 0', function() {
  expect(getDayName(0)).toBe('Sunday');
 });
 it('should return Monday for 1', function() {
  expect(getDayName(1)).toBe('Monday');
 });
 it('should return Tuesday for 2', function() {
  expect(getDayName(2)).toBe('Tuesday');
 });
 it('should return Wednesday for 3', function() {
  expect(getDayName(3)).toBe('Wednesday');
 });
 it('should return Thursday for 4', function() {
  expect(getDayName(4)).toBe('Thursday');
 });
 it('should return Friday for 5', function() {
  expect(getDayName(5)).toBe('Friday');
 });
 it('should return Saturday for 6', function() {
  expect(getDayName(6)).toBe('Saturday');
 });
})



// PART II
describe('join', function() {
	it('should concatenate each string in an array with the given delimiter', function() {
		expect(join(['one', 'two', 'three'], ' and ')).toBe('one and two and three');
		expect(join(['one', 'two', 'three'], '')).toBe('onetwothree');
	});
  it('should concatenate each string in an array with a space if no delimeter is given', function () {
    expect(join(['one', 'two', 'three'])).toBe('one two three');

  });
})


// BONUS
// Simple functions used for unit tests for map and filter
var square = function(num) {
  return num * num;
};
var num2 = function(num) {
  return num === 2;
}

describe('map', function() {
  it('should pass each array item into the given function and push the return values into a new array', function() {
    expect(map([1,2,3],square)).toEqual([1,4,9]);
  });
})

describe('filter', function() {
  it('should create a new array with items that make the given function return true', function() {
    expect(filter([1,2,3],num2)).toEqual([2]);
  })
})

