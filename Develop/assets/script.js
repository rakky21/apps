

var responseContainerEl = document.querySelector('#currentDay');
// what we want to display
var currentDay = moment().format('MMMM Do YYYY');
responseContainerEl.textContent = currentDay
var currentHour = moment().hours()


for (var i = 9; i < 18; i++) {
    var timeBlock = $('#time' + i)
    if (i < currentHour) {
        timeBlock.addClass("past")
    }
}
for (var i = 9; i < 18; i++) {
    var timeBlock = $('#time' + i)
    if (i == currentHour) {
        timeBlock.addClass("present")
    }
}
for (var i = 9; i < 18; i++) {
    var timeBlock = $('#time' + i)
    if (i > currentHour) {
        timeBlock.addClass("future")
    }
}


for (var i = 9; i < 18; i++){
    var timeBox = 'time' + i
    console.log(timeBox)
    var timeInput = document.getElementById(timeBox)
    timeInput.value = localStorage.getItem(timeBox)
}


const time9 = document.getElementById('time9');
const btn9 = document.getElementById('btn9');
btn9.onclick = function (){
localStorage.setItem('time9', time9.value);

localStorage.removeItem('time9', time9.value)
};

const time10 = document.getElementById('time10');
const btn10 = document.getElementById('btn10');
btn10.onclick = function (){
localStorage.setItem('time10', time10.value);

localStorage.removeItem('time10', time10.value)
};

const time11 = document.getElementById('time11');
const btn11 = document.getElementById('btn11');
btn11.onclick = function (){
localStorage.setItem('time11', time11.value);

localStorage.removeItem('time11', time11.value)
};


const time12 = document.getElementById('time12');
const btn12 = document.getElementById('btn12');
btn12.onclick = function (){
localStorage.setItem('time12', time12.value);

localStorage.removeItem('time12', time12.value)
};


const time13 = document.getElementById('time13');
const btn13 = document.getElementById('btn13');
btn13.onclick = function (){
localStorage.setItem('time13', time13.value);

localStorage.removeItem('time13', time13.value)
};

const time14 = document.getElementById('time14');
const btn14 = document.getElementById('btn14');
btn14.onclick = function (){
localStorage.setItem('time14', time14.value);

localStorage.removeItem('time14', time14.value)
};

const time15 = document.getElementById('time15');
const btn15 = document.getElementById('btn15');
btn15.onclick = function (){
localStorage.setItem('time15', time15.value);

localStorage.removeItem('time15', time15.value)
};


const time16 = document.getElementById('time16');
const btn16 = document.getElementById('btn16');
btn16.onclick = function (){
localStorage.setItem('time16', time16.value);

localStorage.removeItem('time16', time16.value)
};


const time17 = document.getElementById('time17');
const btn17 = document.getElementById('btn17');
btn17.onclick = function (){
localStorage.setItem('time17', time17.value);

localStorage.removeItem('time17', time17.value)
};
