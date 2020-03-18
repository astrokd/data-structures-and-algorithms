# Merge Sort

Write a function to sort an array using the merge sort method.

### Pseudo Code

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Sample Array

Input Array: `[8,4,23,42,16,15]`

## step through

|      arr        |   mergeSort function  | n | mid |  left  |  right   | context |
|-----------------|-----------------------|---|-----|--------|----------|---------|
|[8,4,23,42,16,15]|mergeSort(arr)         | 6 |  3  |[8,4,23]|[42,16,15]|    A    |
|        "        |mergeSort(left)        | 3 |  1  |  [8]   |  [4,23]  | A-left  | 
|        "        |mergeSort(left)        | 1 |  1  |        |          |  null   |
|        "        |mergeSort(right)       | 2 |  2  |  [4]   |   [23]   | A-right |
|        "        |mergeSort(left)        | 1 |  1  |        |          |  null   |
|                 |                       |   |     |        |          |         |

|      arr        |   function            | i | j | k | context |
|-----------------|-----------------------|---|---|---|---------|
|[8,4,23,42,16,15]|merge(left, right, arr)| 0 | 0 | 0 |A-right  |
|        "        |                       |   |   |   |         | 
|        "        |                       |   |   |   |         |
|        "        |                       |   |   |   |         |
|        "        |                       |   |   |   |         |
|                 |                       |   |   |   |         |

### Efficency
- Time
- Space