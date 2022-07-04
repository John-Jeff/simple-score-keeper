const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const rounds = document.querySelector('#select-rounds')
const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const reset = document.querySelector('#reset');
const darkMode = document.querySelector('#dark-mode');

p1Button.addEventListener('click', function (e) {
    addToScore(p1);

    if (p1.innerText === rounds.value) {
        p1.classList.add('winner');
        p2.classList.add('loser');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});

p2Button.addEventListener('click', function (e) {
    addToScore(p2);

    if (p2.innerText === rounds.value) {
        p2.classList.add('winner');
        p1.classList.add('loser');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});

reset.addEventListener('click', function (e) {
    resetScore(p1);
    resetScore(p2);
    p1Button.disabled = false;
    p2Button.disabled = false;
})

function addToScore(player) {
    let currentScore = parseInt(player.innerText);
    currentScore++;
    player.innerText = currentScore;
}

function resetScore(player) {
    player.innerText = 0;
    player.classList.remove('winner');
    player.classList.remove('loser');
    player.style.color = document.body.style.color;
}

darkMode.addEventListener('click', function(e) {
    document.body.classList.toggle('darkmode');

    if (document.body.classList.contains('darkmode')) {
        darkMode.innerText = 'Light Mode';
    }else darkMode.innerText = 'Dark Mode';
})