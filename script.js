///Write a program to find all prime numbers between given interval using functions (can we reuse function from exercise 6?).

const number1 = + prompt ('Please enter here a begging:');
const number2 = + prompt ('Please enter here an end');
const primeNumbers = findPrimeNUmbers (number1, number2);

for (let i = 0; i < primeNumbers.length; i++){
    console.log(primeNumbers[i])
}
function findPrimeNumber(number1, number2){
    const primeNumbers = [];
    for (let i = number1; i <= number2; i++){
        if (isPrime(i)){
            primeNumbers[primeNumbers.length] = i;
        }
    }
    return primeNumbers;
}

function isPrime(number) {
    for (let i = 2; i < number; i ++){
        if (number %i === 0){
            return false;
        }
    }
    return true;
} 
/* 
for(var i = number1; i <= number2; i++){
    if(isPrime(i)) 
        console.log(i);


    }
 */

    
   