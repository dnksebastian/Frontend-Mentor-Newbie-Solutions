const submitBtnElement = document.getElementById('submit-btn');
const formElement = document.getElementById('rating-form');
const activeComponentViewElement = document.getElementById('activecomp');
const thankComponentViewElement = document.getElementById('tycomp');
const ratingElements = document.getElementsByTagName('input');
const resultInfoElement = document.getElementById('counter');

const showThankYouView = (e) => {
    e.preventDefault();
    activeComponentViewElement.style.display = 'none';
    thankComponentViewElement.style.display = 'flex';

    const chosenRating = document.querySelector('input[name="stars"]:checked').id;
    resultInfoElement.textContent = chosenRating;

};

formElement.addEventListener('submit', showThankYouView);






