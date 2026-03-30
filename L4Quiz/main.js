//1.

function first(){
    return Math.round(Math.random() * 90 + 10)
}
b = []
oddCnt = 0
evenCnt = 0
sum = 0
mult = 1
min = 101
max = 9
mr = []

for (i = 0; i < 15; i++){
    b[i] = first()

    if (b[i] % 2 == 1)
        oddCnt += 1
    else{
        evenCnt += 1
    }
    if (b[i] < min){
        min = b[i]
    }
    if (b[i] > max){
        max = b[i]
    }
    if(b[i] > 50){
        mr[i] = b[i]
    }
    
    sum += b[i]
    mult *= b[i]
}

console.log(b)
console.log("Odd Numbers " + oddCnt) 
console.log("Even Numbers " + evenCnt)
console.log("Sum Is " + sum)
console.log("Mult Is " + mult)
console.log("Min Is " + min)
console.log("Max Is " + max)
console.log("More Than 50 " + mr)
console.log("საშუალო არითმეტიკული " + (sum/15))
//2.


//3.

function third(){
    return Math.round(Math.random() * 480 + 20)
}
c = []
hasZero = 0
noZero = 0

for (i = 0; i < 30; i++){
    if (c[i] % 10 == 0 || (c / 10) % 10 == 0){
        hasZero += 1
    }
    else{
        noZero += 1
    }
}

console.log("has zero " + hasZero)
console.log("Doesnt have Zero " + noZero)
console.log()
console.log()