// Problem
Write a function to sanitize a URL by encoding spaces to %20

INPUT: string containing a URL "www.codefellows.com/JavaScript 401 class/index"

OUTPUT: a string "www.codefellows.com/JavaScript%20401%20class/index"

// Visualize

"www.codefellows.com/JavaScript 401 class/index"
                              %20  %20
split at " " and join with "%20"

"www.codefellows.com/JavaScript" + "%20" + "JavaScript" ...

// Algorithm
Function takes a argument that is URL
  create returnValue as string
  create an array and split the URL by spaces (" ") into it
  Add the first index of the array to the returnValue 
  Loop through the array starting at the second
    If not at the end of the array 
     place the elements of the array into the return value insert a "%20" in between
    Else place the element of the array into the returnValue
  Return the returnValue

// Edge cases 
Urls with no spaces
Urls with just one space

// Psuedo Code
DECLARE sanitizeURL(urlString)
  DEFINE returnValue <-- ''
  DEFINE urlArray = urlString.split(' ')
  returnValue = urlArray[0]

  if (urlArray.length === 1) return returnValue
  if (urlArray.length === 2) return (returnValue + "%20" + urlArray[1])

  for (i=1; i < urlArray.length ; i++)
      returnValue = returnValue + "%20" + urlArray[i]
  
  return returnValue

  urlString = "www.codefellows.com/JavaScript 401 class/index"
  
  urlArray = ["www.codefellows.com/JavaScript","401","class/index"]

  urlArray.length = 3

  i = 3

  returnValue = "www.codefellows.com/JavaScript%20401%20class/index"

// Big O

  Time O(n)
  Space O(n)

// Code

```JS
let sanitizeUrl = (urlString) => {
  if (!urlString.includes(' ')) return urlString
  const urlArray = urlString.split(' ')
  let returnValue = urlArray[0]

  for (let i = 1; i < urlArray.length; i++) {
    returnValue = returnValue + "%20" + urlArray[i]
  }
  return returnValue
}
```

// Testing

testcase1 = "www.codefellows.com/reviews"

testcase2 = "www.codefellows.com/remote learning"
urlArray = ["www.codefellows.com/remote", "learning"]
returnValue = "www.codefellows.com/remote$20learning"

testcase3 = "www.codefellows.com/remote learning/what to do when learning from home"
urlArray = ["www.codefellows.com/remote", "learning/what", "to", "do", "when", "learning", "from", "home"]
urlArray.length = 8
returnValue = "www.codefellows.com/remote%20learning/what%20to%20do%20when%20learning%20from%20home"


