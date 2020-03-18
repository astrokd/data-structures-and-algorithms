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

In first run (aka context A) arr is `[8,4,23,42,16,15]`, set the values for n to 6, mid to 3, left to `[8,4,23]` and right to `[42,16,15]`.  

In mergeSort(left), context A-left, set the values for n to 3, mid to 1, left to `[8]` and right to `[4,23]`.

In mergeSort(left), within context A-left, set the values for n to 1, mid to 1, n is not greater the 1 so context is null and we return to context A-left.

In mergeSort(right=`[4,23]`), context A-right, set the values for n to 2, mid to 2, left to `[4]` and right to `[23]`.

In mergeSort(left), within context A-right, set the values for n to 1, mid to 1, n is not greater the 1 so context is null and we return to context A-left.


|      arr          |   mergeSort function  | n | mid |  left  |  right   | context |
|-------------------|-----------------------|---|-----|--------|----------|---------|
|[8,4,23,42,16,15]  |mergeSort(arr)         | 6 |  3  |[8,4,23]|[42,16,15]|    A    |
|        "          |mergeSort(left)        | 3 |  1  |  [8]   |  [4,23]  | A-left  | 
|        "          |mergeSort(left)        | 1 |  1  |        |          |  null   |
|        "          |mergeSort(right)       | 2 |  2  |  [4]   |   [23]   | A-right |
|        "          |mergeSort(left)        | 1 |  1  |        |          |  null   |
|                   |                       |   |     |        |          |         |
|[4,23,23,23,23,23] |                       |   |     |        |          |         |

|      arr        |   function            | i | j | k | context |  left  |  right  |
|-----------------|-----------------------|---|---|---|---------|--------|---------|
|[8,4,23,42,16,15]|merge(left, right, arr)| 0 | 0 | 0 | A-right |  [4]   |   [23]  |
|        "        |                       |   |   |   |         |        |         |
|        "        |                       |   |   |   |         |        |         |
|        "        |                       |   |   |   |         |        |         |
|        "        |                       |   |   |   |         |        |         |
|                 |                       |   |   |   |         |        |         |

### Efficency
- Time
- Space