const formEl = document.querySelector('.form');
const rateCardEl = document.querySelector('.rate-card');
const thanksCardEl = document.querySelector('.thanks-card');
const rateValueEl = thanksCardEl.querySelector('.rate-value');


const handleFormSubmit = event => {
    event.preventDefault();

    const rateInputEl = formEl.querySelector('input[name="rate"]:checked');
    
    rateValueEl.innerText = rateInputEl.value;

    rateCardEl.classList.add('hidden');
    thanksCardEl.classList.remove('hidden');
}

formEl.addEventListener('submit', handleFormSubmit);
