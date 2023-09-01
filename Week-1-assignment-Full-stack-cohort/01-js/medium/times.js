/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
 
    // let hrs1 = a.getHours();
    // let min1 =a.getMinutes();
    // let sec1 = a.getSeconds();
    let startTime =  new Date().getTime();

    let sum =0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }

    // let hrs2 = a.getHours();
    // let min2 = a.getMinutes();
    // let sec2 = a.getSeconds();

    // console.log(hrs1 ,hrs2,min1,min2,sec1,sec2)
    let endTime =  new Date().getTime();
    let totalTime = (endTime - startTime) / 1000;
    return totalTime;
}

console.log(calculateTime(1000000000))