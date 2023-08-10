function isPrime(n) {
    if (n <= 1) {
        return false;  
    } 
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
          return false;
        }
      }
        return true;
}   

function showPrimes(number) {
    let primeNumbers = '';
    if (number == 0 || number == 1) { 
        alert('Neither a Prime, Nor a Composite');
        return;
    }
    for (let i = 1; i <= number; i++) {
        if (isPrime(i)) {
            primeNumbers += ` ${i}`;
        }
    }
    alert(primeNumbers);  
    }

showPrimes(prompt('Enter a Number:'));