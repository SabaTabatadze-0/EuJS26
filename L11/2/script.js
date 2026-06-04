// test 1 ღილაკზე დაჭერის შემდეგ შექმენით ახალი <p> ელემენტი.
// paragraph-ში ჩაწერეთ თქვენთვის სასურველი ტექსტი
// და დაამატეთ ის პირველი პარაგრაფის შემდეგ.
//
// test 2 ღილაკზე დაჭერის შემდეგ წაშალეთ დამატებული <p> ელემენტი.

var ctrls = document.getElementsByClassName("ctrls")[0]
var btn1 = ctrls.children[0]
var btn2 = ctrls.children[1]

var text = ctrls.children[2]

btn1.addEventListener("click", function(){
    var par = document.getElementsByClassName("par")[0]
    var new_p = document.createElement("p")
    new_p.classList.add("new")
    new_p.textContent = text.value
    par.after(new_p)
})

btn2.addEventListener("click", function(){
    var par = document.getElementsByClassName("par")[0]
    par.nextSibling.remove()
})