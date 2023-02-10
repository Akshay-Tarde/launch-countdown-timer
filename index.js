// Selecting the elements
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const starting_days = 5;
let total_time = starting_days * 24 * 60 * 60 + 10;
// let total_time = 86420;
setInterval(countdown, 1000);

function countdown() {
    let days_remaining = Math.floor(total_time / (60*60*24) );
    let hours_remaining = Math.floor(total_time / ( 60 * 60) ) % 24 ;
    let minutes_remaining = Math.floor( (total_time / 60) % 60) ;
    let seconds_remaining = total_time % 60;

    seconds_remaining = seconds_remaining < 10 ? "0" + seconds_remaining : seconds_remaining;
    minutes_remaining = minutes_remaining < 10 ? "0" + minutes_remaining : minutes_remaining;
    hours_remaining = hours_remaining < 10 ? "0" + hours_remaining : hours_remaining;
    days_remaining = days_remaining < 10 ? "0" + days_remaining : days_remaining;
    days.innerHTML = `${days_remaining}`;
    hours.innerHTML = `${hours_remaining}`;
    minutes.innerHTML = `${minutes_remaining}`;
    seconds.innerHTML = `${seconds_remaining}`;

    total_time--;
}