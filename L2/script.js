1.
function first(n) {
    Math.ceil(n)
}
2.
function second(n) {
    Math.floor(n)
}
3.
function third(n) {
    Math.round(n)
}
4.
function fourth(n, d){
    Math.round(Math.random(n))
    Math.round(Math.random(d))
    if (d > n){
        Math.ceil(n)
    }
    else{
        Math.floor(n)
    }
}
5.
function fifth() {
    Math.round(Math.random())
}

6.
function sixth() {
    Math.round(Math.random()*45 + 5)
}
7.






console.log(Math.round(Math.random()*45 + 5))