function rndmNumGen(){
    return Math.round(Math.random() * 750)
}

function genBall(){
    var ball = document.createElement("div")
    ball.classList.add("ball")
    ball.style.top = rndmNumGen()+"px"
    ball.style.left = rndmNumGen()+"px"
    var sq = document.querySelector("#field")
    sq.append(ball)
}


setTimeout(genBall, 100)