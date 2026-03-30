function q1_t1(){
    // alert("Quiz 1, Task 1")
    var r1 = document.getElementById("r-1")
    // r1.innerText = "Quiz 1, Task 1"
    // r1.innerText = get_randoms(3, 10, 15)
}
// [10; 100]
function get_randoms(N,a,b){
    var arr_randoms = []
    for(var i = 0; i < N; i++){
    var r = Math.floor(Math.random()*(b-a+1))+a
    arr_randoms.push(r)
    }
    return arr_randoms;
}


//Math.ceil(Math.random()*90) -> [1; 90]
//Math.floor(Math.random()*91) -> [0; 90]
// [0; 90]
//[0; 1)*90=[0; 90)+10=[10; 100)  [10; 100]
// [a; b] - [10; 100] -  Math.floor(Math.random()*(b-a+1))+a 


function get_data_from_arr(a){
    console.log(a)
    var s = 0
    var m = 1
    var min = a[0]
    var max = a[0]
    var oddCnt = 0
    var evenCnt = 0
    for (let i = 0; i < a.length ; i++){
        s += a[i]
        m *= a[i]
        if(min > a[i]){min = a[i]}
        if(max < a[i]){max = a[i]}
        if(a[i] % 2 == 0){evenCnt++}
        if(a[i] % 2 == 1){oddCnt++}
    }
    result =
    `
    ჯამი = ${s},
    ნამრავლი ${m},
    მინიმალური ${min},
    მაქსიმალური ${max},
    ლუწი${evenCnt},
    კენტი${oddCnt}
    `
    console.log(result)
}

// get_data_from_arr(get_randoms(5, 1, 5))


// პრაქტიკული 3
// 1.

function a(txt){
    return (txt.length)
}

console.log(a("YOoooo"))

// 2.

function b(txt){
    aCnt = 0
    for (var i = 0; i < txt.length; i++){
        if(txt[i] == "a"){aCnt++}
    }
    console.log(aCnt)
}

b("abc asdfgg ggga")

// 3.

// 4.

function d(len){
    result = ''
    a = 32
    b = 126
    for (let i = 0; i < len; i++){
        const ran = Math.floor(Math.random()*(b-a+1)+a)
        result += String.fromCharCode(ran)
    }
    return result
}

console.log(d(12))