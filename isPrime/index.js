function isPrime(num) {
  // do code here
  var flag = true;
              
  // Getting the value form text
  // field using DOM
  for(i = 2; i <= num - 1; i++)
      if (num % i == 0) {
          flag = false;
          break;
      }
        
      // Check and display alert message
  if (flag == true)
      return num + " IS A PRIME";
  else
      return num + " IS NOT A PRIME";
}

module.exports = isPrime;