// Config
const GRID_SIZE = 25;
const DURATION = 30;

// Elements
const gridEl = document.getElementById('grid');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const overlay = document.getElementById('overlay');
const titleEl = document.getElementById('title');
const subEl = document.getElementById('subtitle');

// State
let score = 0;
let timeLeft = DURATION;    
let timerLoop = null;
let isPlaying = false;
let targetIdx = -1;

// Create the grid once
function initGrid() {
    gridEl.innerHTML = '';
    for (let i = 0; i < GRID_SIZE; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mousedown', () => handleClick(i));
        gridEl.appendChild(cell);
    }
}

function startGame() {
    score = 0;
    timeLeft = DURATION;
    isPlaying = true;
    targetIdx = -1;

    scoreEl.innerText = '0';
    timeEl.innerText = timeLeft;
    overlay.classList.add('hidden');

    // Reset grid appearance
    const cells = document.querySelectorAll('.cell');
    cells.forEach(c => c.classList.remove('target'));

    // Start Timer
    timerLoop = setInterval(() => {
        timeLeft--;
        timeEl.innerText = timeLeft;
        if (timeLeft <= 0) gameOver();
    }, 1000);

    spawnTarget();
}

function spawnTarget() {
    if (!isPlaying) return;

    const cells = document.querySelectorAll('.cell');

    // Remove old target
    if (targetIdx !== -1) {
        cells[targetIdx].classList.remove('target');
    }

    // Pick new unique spot
    let newIdx;
    do {
        newIdx = Math.floor(Math.random() * GRID_SIZE);
    } while (newIdx === targetIdx);

    targetIdx = newIdx;
    cells[newIdx].classList.add('target');
}

function handleClick(idx) {
    if (!isPlaying) return;

    const cells = document.querySelectorAll('.cell');
    const cell = cells[idx];

    if (cell.classList.contains('target')) {
        // Hit!
        score++;
        scoreEl.innerText = score;
        cell.classList.remove('target');
        spawnTarget();
    }
}

function gameOver() {
    isPlaying = false;
    clearInterval(timerLoop);

    // Simple grading
    let grade = 'C';
    if (score > 50) grade = 'S';
    else if (score > 40) grade = 'A';
    else if (score > 30) grade = 'B';

    titleEl.innerText = "SESSION COMPLETE";
    subEl.innerText = `Targets Hit: ${score} // Rank: ${grade}`;
    overlay.classList.remove('hidden');
}

initGrid();
