// Selecting the elements
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const starting_days = 1;
let total_time = starting_days * 24 * 60 * 60;
// let total_time = 86420;
setInterval(countdown, 1000);

function countdown() {
    const days_remaining = Math.floor(total_time / (60*60*24) );
    const hours_remaining = Math.floor(total_time / ( 60 * 60) ) % 24 ;
    const minutes_remaining = Math.floor( (total_time / 60) % 60) ;
    let seconds_remaining = total_time % 60;

    seconds_remaining = seconds_remaining < 10 ? "0" + seconds_remaining : seconds_remaining;
    days.innerHTML = `${days_remaining}`;
    hours.innerHTML = `${hours_remaining}`;
    minutes.innerHTML = `${minutes_remaining}`;
    seconds.innerHTML = `${seconds_remaining}`;

    total_time--;
}