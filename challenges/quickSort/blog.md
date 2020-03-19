# Quick Sort

Write a function to sort an array using the quick sort method.

### Pseudo Code

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

### Sample Array

Input Array: `[8,4,23,42,16,15]`

## step through

Call the QuickSort function with arr an array `[8,4,23,42,16,15]`, left = `0` and right = arr.length-1 `5`.  The expression left < right is true. 
    call the Partition function set result to position
        arr = `[8,4,23,42,16,15]`
        left = `0`
        right = `5`
            pivot = 15
            low = left - 1 (-1)
                for i = 0 loop while i < right
                    8 < 15      4 < 15      23 !< 15    42 !< 15    16 !< 15
                    low = 0     low = 1
                    i = 0       i = 1
                swap index  right = `5` with low + 1 = `2`
                    place 15 at index `2`
                    place 23 at index `5`
    postion = return 2 = 1+1 = low+1
    recurse QuickSort with arr = `[8,4,15,42,16,23]`, left = `0`, postion = 1 = 2 - 1, The experession 0 < 1 true.
        call the Partition function 
            arr = `[8,4,15,42,16,23]`
            left = `0`
            right = `1`
                pivot  = 4
                    for 1 = 0 loop while i < right
                        8 !< 4      4 !< 4      23 !< 4    42 !< 4    23 !< 4
                    swap index right = `1` with with low + 1 = `0`
                        place 4 at index `0`
                        place 8 at index `1`



                    


### Efficency
- Time O(n log(n)) like merge sort
- Space O(log(n))
