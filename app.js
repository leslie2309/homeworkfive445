function printPrimenumbers() {
  "use strict";
  const outputStr = document.getElementById('output')
  const outputStr2 = document.getElementById('output2')

  var i, j, c, numone, numtwo,count;
  var arr = [];
  count = 0;
  //get the numone and numtwo value from form
 numone = parseInt(document.getElementById('numone').value);                
 numtwo = parseInt(document.getElementById('numtwo').value);

  if (numone <= numtwo){
    if ((2 <= numone) && (numone <= 100)){
      if((2 <= numtwo) && (numtwo <= 100)){
        //loop till i equals to end
        for (i = numone; i <= numtwo; i++) {                    
            c = 0;
            for (j = 1; j <= i; j++) {
              // % modules will give the remainder value, so if the reminder is 0 then it is divisible
                if (i % j == 0) {
                //increment the value of c
                    c++;
                }
            }

        //if the value of c is 2 then it is a prime number
        //because a prime number should be exactly divisible by 2 times only (itself and 1)
            if (c == 2) {
                arr.push(i)
            }
          } 
          const outputStr = 'There are '+ arr.length + ' prime numbers. '
          output.innerHTML = '<h4>' + outputStr + '<h4>'
          const outputStr2 = " " + arr
          output2.innerHTML = '<h3>' + outputStr2 + '<h3>'
      }
      else{
        const outputStr = 'Invalid input, please try again.'
        output.innerHTML = '<h3>' + outputStr + '<h3>'}    
      }
    else{
      const outputStr = 'Invalid input, please try again.'
      output.innerHTML = '<h3>' + outputStr + '<h3>'
    }

  }
  else{
    if ((2 <= numone) && (numone <= 100)){
      if((2 <= numtwo) && (numtwo <= 100)){
        //loop till i equals to end
        for (i = numtwo; i <= numone; i++) {                    
            c = 0;
            for (j = 1; j <= i; j++) {
              // % modules will give the remainder value, so if the reminder is 0 then it is divisible
                if (i % j == 0) {
                //increment the value of c
                    c++;
                }
            }

        //if the value of c is 2 then it is a prime number
        //because a prime number should be exactly divisible by 2 times only (itself and 1)
            if (c == 2) {
                arr.push(i)
            }
          } 
          const outputStr = 'There are '+ arr.length + ' prime numbers. '
          output.innerHTML = '<h4>' + outputStr + '<h4>'
          const outputStr2 = " " + arr
          output2.innerHTML = '<h3>' + outputStr2 + '<h3>'
      }
      else{
        const outputStr = 'Invalid input, please try again.'
        output.innerHTML = '<h3>' + outputStr + '<h3>'}    
      }
    else{
      const outputStr = 'Invalid input, please try again.'
      output.innerHTML = '<h3>' + outputStr + '<h3>'
    }
  
  }
}