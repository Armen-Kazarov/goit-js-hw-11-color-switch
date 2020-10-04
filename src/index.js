import './styles.css';
import colors from './colors'

document.addEventListener("DOMContentLoaded", () => {
  const bodyRef = document.querySelector('body');
  const btnStartRef = document.querySelector('button[data-action="start"]');
  const btnStopRef = document.querySelector('button[data-action="stop"]');
  let settingInterval;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const bodyBgColorHandler = () => {
    let randomNumber = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[randomNumber];
  };

  const startChangeBodyBgColor = () => {
    settingInterval = setInterval(bodyBgColorHandler, 1000);
    btnStartRef.setAttribute('disabled', 'disabled');
  };

  const stopChangeBodyBgColor = () => {
    btnStartRef.removeAttribute('disabled');
    clearInterval(settingInterval);
  };

  btnStartRef.addEventListener('click', startChangeBodyBgColor);
  btnStopRef.addEventListener('click',stopChangeBodyBgColor);
});
