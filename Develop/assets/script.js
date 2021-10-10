
var responseContainerEl = document.querySelector('#currentDay');
var currentDay = moment().format('MMMM Do YYYY');
responseContainerEl.textContent = currentDay
var currentHour = moment().hours()



for (var i = 9; i < 18; i++) {
    var timeBlock = $('#time' + i)
    if (i < currentHour) {
        timeBlock.addClass("past")
    }
    if (i == currentHour) {
        timeBlock.addClass("present")
    }
    if (i > currentHour) {
        timeBlock.addClass("future")
    }
}


const time11 = document.getElementById('time11');
btn11.onclick = function () {
    const onc = time11.value;
    console.log(onc);
};
// 12
const time12 = document.getElementById('time12');
btn12.onclick = function () {
    const doc = time12.value;
};
// 13
const time13 = document.getElementById('time13');
btn13.onclick = function () {
    const tre = time13.value;
};
// 14
const time14 = document.getElementById('time14');
btn14.onclick = function () {
    const cato = time14.value;
};
// 15
const time15 = document.getElementById('time15');
btn15.onclick = function () {
    const quin = time15.value;
};
// 16
const time16 = document.getElementById('time16');
btn16.onclick = function () {
    const diesi = time16.value;
};
// 17
const time17 = document.getElementById('time17');
btn17.onclick = function () {
    const esiet = time17.value;
};