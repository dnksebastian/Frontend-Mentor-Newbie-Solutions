// DOM Elements & global variables

const resultElement = document.getElementById('result');

const detailsResultListEl = document.getElementById('details-list');

const scoresArr = [];

// Functions

  function getScoreData() {
      fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(obj => {
            renderDataEl(obj, detailsResultListEl);
            scoresArr.push(+obj.score);
        });
        resultElement.textContent = getScoreAvg(scoresArr);
      })
      .catch(error => console.log(error))
}


function renderDataEl(dataInput, container) {
    const liEl = document.createElement('li');
    const liIconWrap = document.createElement('div');
    const iconImg = document.createElement('img');
    const skillName = document.createElement('span');
    const scoreHelper = document.createElement('div');
    const detailScore = document.createElement('span');
    const detScoreHelp = document.createElement('span');

    liEl.classList.add('detail-li');
    liIconWrap.classList.add('icon-wrap');
    iconImg.classList.add('icon');
    skillName.classList.add('skill-name');
    scoreHelper.classList.add('detail');
    scoreHelper.classList.add('score-helper');
    detailScore.classList.add('detail-score');
    detScoreHelp.textContent = '/ 100';

    liEl.appendChild(liIconWrap)
    liEl.appendChild(skillName)
    liEl.appendChild(scoreHelper)
    liIconWrap.appendChild(iconImg);
    scoreHelper.appendChild(detailScore);
    scoreHelper.appendChild(detScoreHelp);

    skillName.textContent = dataInput.category;
    detailScore.textContent = dataInput.score;
    iconImg.src = dataInput.icon;
    iconImg.alt = 'icon';

    container.appendChild(liEl);
};

function getScoreAvg(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = Math.round((sum / arr.length));
    return avg
};

getScoreData();