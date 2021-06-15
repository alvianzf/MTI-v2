function isPrime(num) {
  // do code here
  var n, i, flag = true;
              
  // Getting the value form text
  // field using DOM
  var n = document.myform.n.value;
  var n = parseInt(n)
  for(i = 2; i <= n - 1; i++)
      if (n % i == 0) {
          flag = false;
          break;
      }
        
      // Check and display alert message
  if (flag == true)
      return n + " IS A PRIME";
  else
      return n + " IS NOT A PRIME";
}

module.exports = isPrime;