
// // fetch('https://momentjs.com/downloads/moment-with-locales.js')
// //     .then(response => response.json())
// //     .then(data => console.log(data));
// // const d = new Date();
// // document.getElementById("demo").innerHTML = d.getDate();
// // var currentDay = document.getElementById("currentDay").value;
// // document
// // fetch(
// //     'https://momentjs.com/downloads/moment-with-locales.js'
// // )
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (response) {
// //         // console.log(response)





// //         var gifImg = document.createElement('h2');
// //         // gifImg.setAttribute('src', response.data.image_url);
// //         responseContainerEl.appendChild(jummbotron);
// //     });
// // var today = new Date();
// // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// // var dayofTime = document.querySelector("#time-virginia");
// // dayofTime.textContent = moment().format('MMM DD, - hh:mm:ss a')
// // grabbing 21 'currentday' for it to be displayed/
// var responseContainerEl = document.querySelector('#currentDay');
// // what we want to display
// var currentDay = moment().format('MMMM Do YYYY');
// responseContainerEl.textContent = currentDay
// var currentHour = moment().hours()





// // use varrial to creat 24 different time slots 
// // var timeSlots = slots
// // for (var i = 0 ; i < 24 ; i = i++);
// // console.log( this)
// // TIME AND COLORS
// // console.log(currentHour)

// // for (var i = 9; i < 18; i++) {
// //     var timeBlock = $('#time' + i)
// //     if (i < currentHour) {
// //         timeBlock.addClass("past")
// //     }
// // }
// // for (var i = 9; i < 18; i++) {
// //     var timeBlock = $('#time' + i)
// //     if (i == currentHour) {
// //         timeBlock.addClass("present")
// //     }
// // }
// // for (var i = 9; i < 18; i++) {
// //     var timeBlock = $('#time' + i)
// //     if (i > currentHour) {
// //         timeBlock.addClass("future")
// //     }
// // }

// for (var i = 9; i < 18; i++) {
//     var timeBlock = $('#time' + i)
//     if (i < currentHour) {
//         timeBlock.addClass("past")
//     }
//     if (i == currentHour) {
//         timeBlock.addClass("present")
//     }
//     if (i > currentHour) {
//         timeBlock.addClass("future")
//     }
//     // if ( )
// }



// // 6 MIGHT HAVE SOMETHING TO DEAL WITH IT TO DISPLAY
// // const saveBtns = $(".saveBtn")
// // for (let i = 0; i < saveBtns.length; i++) {
// //     currentBtn = saveBtns[i]
// //     currentDataVal = $(saveBtns[i]).attr("data-value")
// // }




// // 🔒 locked

// // const time9 = document.getElementById('time9');
// // const btn9 = document.getElementById('btn9');
// // btn9.onclick = function () {
// //     // const nue = time9.value;
// //     // const ve = btn9.value;
// //     // console.log(nue);
// //     // console.log(ve);

// //     const time9 = document.getElementById('time9');
// //     btn9.onclick = function () {
// //         const nue = time9.value;
// //         // console.log(nue);
// //         localStorage.setItem('time9', time9);
// //         console.log(nue);
// //     };
// //     // same butten to delete it once pressed again
// //     // JSON.parse(window.localStorage.getItem('time9'));    ???
// //     // 10
// //     const time10 = document.getElementById('time10');
// //     btn10.onclick = function () {
// //         const di = time10.value;
// //         localStorage.setItem('time10', time10);
// //         console.log(di);
// //     };
//     // 11
//     const time11 = document.getElementById('time11');
//     btn11.onclick = function () {
//         const onc = time11.value;
//         console.log(onc);
//     };
//     // 12
//     const time12 = document.getElementById('time12');
//     btn12.onclick = function () {
//         const doc = time12.value;
//     };
//     // 13
//     const time13 = document.getElementById('time13');
//     btn13.onclick = function () {
//         const tre = time13.value;
//     };
//     // 14
//     const time14 = document.getElementById('time14');
//     btn14.onclick = function () {
//         const cato = time14.value;
//     };
//     // 15
//     const time15 = document.getElementById('time15');
//     btn15.onclick = function () {
//         const quin = time15.value;
//     };
//     // 16
//     const time16 = document.getElementById('time16');
//     btn16.onclick = function () {
//         const diesi = time16.value;
//     };
//     // 17
//     const time17 = document.getElementById('time17');
//     btn17.onclick = function () {
//         const esiet = time17.value;
//     };

// // }

// // var input = document.getElementById("time9");
// // function handleInput(event) {
// //     event.preventDefault();
// // } input.addEventListener('btn9', handleInput);
// // $("#prospects_input").submit(function (e) {
// //     e.preventDefault();
// // });

// // const textarea17 = document.getElementById('textarea17');
// // textarea17.onclick = function () {
// //     const esiet = textarea17.value;
// //     console.log(esiet);
// // };

// // ONE FOR LOOP TO RULE THEM ALL

// // for (var i = 0; i < localStorage.length; i++){
// //     $('body').append(localStorage.getItem(localStorage.key(i)));
// // };


// // function showItemsByKey() {
// //     var typeofKey = null;
// //     for (var key in localStorage) {
// //         typeofKey = (typeof localStorage[key]);
// //         console.log(key, typeofKey);
// //     }
// //  }

// // $('body').on('click','a.saveButton', saveHandler)



// // MAKE IT SO IT DOESN'T GO AWAY
// // var formSubmitHandler = function(event) {
// //     event.preventDefault();
// //     console.log(event);
// //   };




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

var messageBox = document.getElementsByClassName('timeBlocks');
console.log(messageBox)



var messageBox = JSON.parse(localStorage.getItem('timeBlocks'));


$('#saveBtn').click(function() {
    $('#timeBlocks').addClass('active');
    console.log(messageBox)
});


// const time11 = document.getElementById('time11');
// btn11.onclick = function () {
//     const onc = time11.value;
//     console.log(onc);
// };
// // 12
// const time12 = document.getElementById('time12');
// btn12.onclick = function () {
//     const doc = time12.value;
// };
// // 13
// const time13 = document.getElementById('time13');
// btn13.onclick = function () {
//     const tre = time13.value;
// };
// // 14
// const time14 = document.getElementById('time14');
// btn14.onclick = function () {
//     const cato = time14.value;
// };
// // 15
// const time15 = document.getElementById('time15');
// btn15.onclick = function () {
//     const quin = time15.value;
// };
// // 16
// const time16 = document.getElementById('time16');
// btn16.onclick = function () {
//     const diesi = time16.value;
// };
// // 17
// const time17 = document.getElementById('time17');
// btn17.onclick = function () {
//     const esiet = time17.value;
// };