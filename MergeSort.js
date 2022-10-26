function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}
merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]
