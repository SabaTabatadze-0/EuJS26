// function alert_1(){
//     alert("Hello, World!")
//     var b = prompt("Name: ")
//     var c = confirm("are you a student?")
// }

// alert_1()

// პრომპტით შეიტანეთ 3 რიცხვი, თუ რიცხვი არის 10დან 50-მდე
// ალერტით გამოტანეთ ამ რიცხვის რაოდენობის შემთხვევით სიმბოლიანი სიტყვა

// const alph = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//   'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 
//   'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'
// ]

// function getRandom(){
//     for(let i = 0; i < 3; i++){
//         var a = prompt()
//         if (a >= 10 && a < 50){
//             let b = ""
//             for(let j = 0; j < a; j++){
//             b += alph[Math.floor(Math.random() * 86)]
//             }
//             alert(b)
//         }
//     }
//     return
// }

// getRandom()

// function genRanStr(){
//     var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for (let i = 0; i < 3; i++){
//         var a = prompt()
//         if(a >= 10 && a <= 50){
//             var word = ""
//             for(let j = 0; j < a; j++){
//                 word += alph[Math.floor(Math.random() * 52)]
//             }
//             alert(word)
//         }
//     }
// }

// genRanStr()


// function ranStrToHTML(){
//     var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var a = document.getElementById("a")
//     var b = document.getElementById("b")
//     var c = document.getElementById("c")

//     a.innerHTML = a.innerHTML[Math.floor(Math.random() * a.innerHTML.length)];
// }


function genRanStrToHTML(){
    var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i = 0; i < 3; i++){
        // console.log(document.getElementsByTagName("input")[i].value)
        var a = document.getElementsByTagName("input")[i].value
        if(a >= 10 && a <=50){
            var word = ""
            for(let j = 0; j < a; j++){
                word += alph[Math.floor(Math.random * alph.length)]
            }
            console.log(word)
        }
    }
}