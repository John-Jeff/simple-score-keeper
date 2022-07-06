const player1 = {
    score: document.querySelector('#p1'),
    button: document.querySelector('#p1-button')
};

const player2 = {
    score: document.querySelector('#p2'),
    button: document.querySelector('#p2-button')
};

const rounds = document.querySelector('#select-rounds')
const reset = document.querySelector('#reset');
const darkMode = document.querySelector('#dark-mode');

player1.button.addEventListener('click', function (e) {
    addToScore(player1);
    winner(player1, player2);
});

player2.button.addEventListener('click', function (e) {
    addToScore(player2);
    winner(player2, player1);
});

reset.addEventListener('click', function (e) {
    resetScore(player1);
    resetScore(player2);
})

function addToScore(player) {
    let currentScore = parseInt(player.score.innerText);
    currentScore++;
    player.score.innerText = currentScore;
}

function winner(player, opponent) {
    if (player.score.innerText === rounds.value) {
        player.score.classList.add('winner');
        opponent.score.classList.add('loser');
        opponent.button.disabled = true;
        player.button.disabled = true;
    }
}

function resetScore(player) {
    player.score.innerText = 0;
    player.score.classList.remove('winner');
    player.score.classList.remove('loser');
    player.button.disabled = false;
    player.score.style.color = document.body.style.color;
}

darkMode.addEventListener('click', function (e) {
    document.body.classList.toggle('darkmode');

    if (document.body.classList.contains('darkmode')) {
        darkMode.innerText = 'Light Mode';
    } else darkMode.innerText = 'Dark Mode';
})