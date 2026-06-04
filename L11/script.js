//test 1 ღილაკზე დაჭერის შემდეგ test 1 დივის ქვეშ გამოიტანეთ ახალი divი.
//test 2 რილაკზე დაჭერის შემდეგ, წაშალეთ ყველა დამატებული div თაგი.

// function genDiv(){
//     var btn1 = document.getElementsByClassName("ctrls")[0]
//     btn1 = btn1.children[0]
//     // btn1.addEventListener("click", function(){
//     //     document.createElement("div")
//     // })
//     console.log(btn1)
// }

// genDiv()
 
var ctrls = document.getElementsByClassName("ctrls")[0]
var btn1 = ctrls.children[0]
var btn2 = ctrls.children[1]

btn1.addEventListener("click", function(){
    var test = document.getElementsByClassName("test")[0]
    var new_div = document.createElement("div")
    new_div.classList.add("new")
    // var cont = document.getElementsByClassName("container")
    test.after(new_div)
})

// btn2.addEventListener("click", function(){
//     var new_div = document.getElementsByClassName("new")[0]
//     new_div.remove()
// })
btn2.addEventListener("click", function(){
    var test = document.getElementsByClassName("test")[0]
    test.nextSibling.remove()
})