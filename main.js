// const nowTime = new Date().getTime();
const endTime = new Date('2020-01-25 22:34:00').getTime();
// const time = endTime - nowTime;

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');
setInterval(() => {
    //wyznaczanie dni
    const nowTime = new Date().getTime();
    const time = Math.floor((endTime - nowTime/1000));
    const days = Math.floor((endTime / (1000*60*60*24)) - (nowTime / (1000*60*60*24)))
    // console.log(time)
    console.log(days)

    //wyznaczanie godzin; %24 -modulo; podaje resztęz dzielenia
    let hours = Math.floor((endTime / (1000*60*60) - nowTime / (1000*60*60)) % 24) ;
    console.log(hours)
    hours = hours < 10 ? `0${hours}` : hours;

    //Wyznaczanie minut
    let minutes = Math.floor((endTime / (1000*60) - nowTime / (1000*60))%60)
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    //Wyznaczanie sekund
    let secound = Math.floor((endTime / 1000 - nowTime / 1000)%60);
    secound = secound < 10 ? `0${secound}` : secound;

    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;
    spanS.textContent = secound;
}, 1000)