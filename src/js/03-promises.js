import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");
const inputDelay = document.querySelector(".form input[name=delay]");
const inputStep = document.querySelector(".form input[name=step]");
const inputAmount = document.querySelector(".form input[name=amount]");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  let delay = Number(inputDelay.value);
  let step = Number(inputStep.value);
  let amount = Number(inputAmount.value);

  for (let position = 1; position <= amount; position++) {
    createPromise({position, delay}).then(onSuccess).catch(onError);
    delay += step;

  }
  form.reset();
}


function createPromise({position, delay}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }}, delay);
    });
  
};

function onError({position, delay}) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
}

function onSuccess({position, delay}) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
}