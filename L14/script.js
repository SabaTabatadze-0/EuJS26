function rndmNumGen(){
    return Math.random() * 750
}

function genBall(){
    var ball = document.createElement("div")
    ball.classList.add("ball")
    ball.style.top = rndmNumGen()+"px"
    ball.style.left = rndmNumGen()+"px"
    var num = Math.floor(Math.random() * 10)
    var r = Math.random() * 255
    var g = Math.random() * 255
    var b = Math.random() * 255
    ball.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    ball.innerText = num
    var sq = document.querySelector("#field")
    sq.append(ball)
}


setTimeout(genBall, 100)