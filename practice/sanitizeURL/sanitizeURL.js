// Write a function to sanitize a URL by encoding spaces to %20

/*
 * INPUT: string containing a URL "www.codefellows.com/JavaScript 401 class/index"
 * OUTPUT: a string "www.codefellows.com/JavaScript%20401%20class/index"
 *
 * Algorithm
 * 
 * 
 */

let sanitizeUrl = (urlString) => {
  if (!urlString.includes(' ')) return urlString
  const urlArray = urlString.split(' ')
  let returnValue = urlArray[0]

  for (let i = 1; i < urlArray.length; i++) {
    returnValue = returnValue + "%20" + urlArray[i]
  }
  return returnValue
}

const url1 = "http://code.org/hour of code.html"
const url2 = "www.codefellows.com/JavaScript 401 class/index"

console.log('url1:',sanitizeUrl(url1))
console.log('url2:',sanitizeUrl(url2))
