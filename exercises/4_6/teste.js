function squareNumber(n){
    return("The result of squaring the number " + n + " is " + n*n)
}
console.log(squareNumber(91));

function halfNumber(m){
    return("Half of " + m + " is " + m/2)
    }

console.log(halfNumber(10));

function percentOf(o, p){
    var percent = (o/p) * 100;
return(o + " is " + percent + "%" + " of " + p)
}

console.log(percentOf(5, 10));

function areaOfCircle(q){
    var pi = 3.14;
    return("The area for a circle with radius " + q + " is " + pi * (q*q))
}

console.log(areaOfCircle(6))