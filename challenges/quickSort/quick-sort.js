let quickSort = (arr, left = 0, right = arr.length-1) => {
  if (left < right) {
    let position = partition(arr, left, right)
    // sort left
    quickSort(arr, left, position - 1)
    // sort right
    quickSort(arr, position + 1, right)
  }
}

let partition = (arr, left, right) => {
  let pivot = arr[right]
  let low = left - 1
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      low++
      swap(arr, i, low)
    }
  }
  swap(arr, right, low + 1)
  return (low + 1);
}

let swap = (arr, j, lo) => {
  let temp = arr[j]
  arr[j] = arr[lo]
  arr[lo] = temp
}

module.exports = quickSort