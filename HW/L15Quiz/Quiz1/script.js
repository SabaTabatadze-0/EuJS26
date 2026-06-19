//1.დაწერეთ ფუნქცია, რომელიც გამოიტანს 10 შემთხვევით div თა გს ეკრანზე შემთხვევით ადგილას, div-ების სიგრძე და სიგანე იქნება შემთხვევით მონაცემები 50-დან 100-მდე შუალედში, დივში ჩაწერილი იქნება ამ დივის ფართობი. 
function rndNum(){
    var a = Math.random() * 50 + 50
    return a
}

function genDiv(){
    var bigdiv = document.createElement("div")
    bigdiv.classList.add("bigdiv")
    for(let i = 0; i < 10; i++){
        var rndDiv = document.createElement("div")
        rndDiv.classList.add("rndDiv")

        var w = rndNum()
        var l = rndNum()
        rndDiv.style.width = w + "px"
        rndDiv.style.height = l + "px"
        rndDiv.style.top = Math.random() * window.innerHeight + "px"
        rndDiv.style.left = Math.random() * window.innerWidth + "px"
        bigdiv.appendChild(rndDiv)
    }
    
    document.body.append(bigdiv)
}

genDiv()