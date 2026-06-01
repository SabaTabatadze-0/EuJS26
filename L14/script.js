const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const COLS = 10;
const ROWS = 20;
const BLOCK = 30;

ctx.scale(BLOCK, BLOCK);

const colors = [
    null,
    "#FF0D72",
    "#0DC2FF",
    "#0DFF72",
    "#F538FF",
    "#FF8E0D",
    "#FFE138",
    "#3877FF"
];

const pieces = {
    T: [
        [0,1,0],
        [1,1,1],
        [0,0,0]
    ],
    O: [
        [2,2],
        [2,2]
    ],
    L: [
        [0,0,3],
        [3,3,3],
        [0,0,0]
    ],
    J: [
        [4,0,0],
        [4,4,4],
        [0,0,0]
    ],
    I: [
        [0,0,0,0],
        [5,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
    ],
    S: [
        [0,6,6],
        [6,6,0],
        [0,0,0]
    ],
    Z: [
        [7,7,0],
        [0,7,7],
        [0,0,0]
    ]
};

function createBoard(w, h) {
    const board = [];
    while (h--) board.push(new Array(w).fill(0));
    return board;
}

const board = createBoard(COLS, ROWS);

const player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    score: 0
};

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                ctx.fillStyle = colors[value];
                ctx.fillRect(
                    x + offset.x,
                    y + offset.y,
                    1,
                    1
                );
            }
        });
    });
}

function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(board, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}

function collide(board, player) {
    const [m, o] = [player.matrix, player.pos];

    for (let y = 0; y < m.length; y++) {
        for (let x = 0; x < m[y].length; x++) {
            if (
                m[y][x] !== 0 &&
                (board[y + o.y] &&
                 board[y + o.y][x + o.x]) !== 0
            ) {
                return true;
            }
        }
    }

    return false;
}

function merge(board, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                board[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function rotate(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < y; x++) {
            [
                matrix[x][y],
                matrix[y][x]
            ] = [
                matrix[y][x],
                matrix[x][y]
            ];
        }
    }

    matrix.forEach(row => row.reverse());
}

function playerRotate() {
    rotate(player.matrix);

    let offset = 1;

    while (collide(board, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));

        if (offset > player.matrix[0].length) {
            rotate(player.matrix);
            rotate(player.matrix);
            rotate(player.matrix);
            player.pos.x = 0;
            return;
        }
    }
}

function playerDrop() {
    player.pos.y++;

    if (collide(board, player)) {
        player.pos.y--;
        merge(board, player);
        playerReset();
        clearLines();
        updateScore();
    }

    dropCounter = 0;
}

function playerMove(dir) {
    player.pos.x += dir;

    if (collide(board, player)) {
        player.pos.x -= dir;
    }
}

function clearLines() {
    let rowCount = 1;

    outer:
    for (let y = board.length - 1; y >= 0; y--) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] === 0) {
                continue outer;
            }
        }

        const row = board.splice(y, 1)[0].fill(0);
        board.unshift(row);
        y++;

        player.score += rowCount * 10;
        rowCount *= 2;
    }
}

function createPiece(type) {
    return pieces[type];
}

function playerReset() {
    const types = "TJLOSZI";
    player.matrix =
        createPiece(
            types[Math.floor(Math.random() * types.length)]
        );

    player.pos.y = 0;
    player.pos.x =
        Math.floor(COLS / 2) -
        Math.floor(player.matrix[0].length / 2);

    if (collide(board, player)) {
        board.forEach(row => row.fill(0));
        player.score = 0;
    }
}

function updateScore() {
    document.getElementById("score").innerText =
        player.score;
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        playerMove(-1);
    } else if (event.key === "ArrowRight") {
        playerMove(1);
    } else if (event.key === "ArrowDown") {
        playerDrop();
    } else if (event.key === "ArrowUp") {
        playerRotate();
    }
});

let dropCounter = 0;
let dropInterval = 500;
let lastTime = 0;

function update(time = 0) {
    const delta = time - lastTime;
    lastTime = time;

    dropCounter += delta;

    if (dropCounter > dropInterval) {
        playerDrop();
    }

    draw();
    requestAnimationFrame(update);
}

playerReset();
updateScore();
update();