const whenWasItPosted = date => {
  // do code here

}


// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whenWasItPosted("2 January 2020"), '11 month ago')
test(whenWasItPosted("25 November 2020"), '2 week ago')
test(whenWasItPosted("10 December 2020"), '3 day ago')
test(whenWasItPosted("1 December 2019"), '1 year ago')
test(whenWasItPosted("23 October 2000"), '20 year ago')