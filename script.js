function isPrime(n) {
    if (n === 1 || n === 0) {
        return false;
    } else {
        for (let i=2; i < n; i++) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }
}   

function showPrimes(number) {
    let primeNumbers = '';
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            primeNumbers += ` ${i}`;
        }
    }
    return primeNumbers;  
    }

let num = prompt('Enter a Number:');
let result = showPrimes(num);
alert(result);