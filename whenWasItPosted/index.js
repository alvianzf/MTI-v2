const whenWasItPosted = date => {
  // do code here
  let timestamp = new Date().getTime() - new Date(date).getTime()
  let difference = Math.floor(timestamp / 1000 / 60 / 60 / 24)

  if (difference < 7) return `${difference} day ago`
  if (difference < 30) return `${Math.floor(difference / 7)} week ago`
  if (difference < 365) return `${Math.floor(difference / 30)} month ago`
  return `${Math.floor(difference / 365)} year ago`
}


// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whenWasItPosted("2 January 2020"), '11 month ago')
test(whenWasItPosted("25 November 2020"), '2 week ago')
test(whenWasItPosted("10 December 2020"), '3 day ago')
test(whenWasItPosted("1 December 2019"), '1 year ago')
test(whenWasItPosted("23 October 2000"), '20 year ago')