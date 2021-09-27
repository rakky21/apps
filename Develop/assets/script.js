
// fetch('https://momentjs.com/downloads/moment-with-locales.js')
//     .then(response => response.json())
//     .then(data => console.log(data));
// const d = new Date();
// document.getElementById("demo").innerHTML = d.getDate();
// var currentDay = document.getElementById("currentDay").value;
// document
// fetch(
//     'https://momentjs.com/downloads/moment-with-locales.js'
// )
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         // console.log(response)




//         var gifImg = document.createElement('h2');
//         // gifImg.setAttribute('src', response.data.image_url);
//         responseContainerEl.appendChild(jummbotron);
//     });
// var today = new Date();
// var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

// grabbing 21 'currentday' for it to be displayed/
var responseContainerEl = document.querySelector('#currentDay');
// what we want to display
var currentDay = moment().format('MMMM Do YYYY');
responseContainerEl.textContent = currentDay
var currentHour = moment().hours()





// use varrial to creat 24 different time slots 
// var timeSlots = slots
// for (var i = 0 ; i < 24 ; i = i++);
// console.log( this)
// TIME AND COLORS INDICATING TIME 
// console.log(currentHour)

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




// 🔒 locked

// 🔓 unlocked

// ✅ scheduled 
// hover over to show locked or unlocked image


// LOCAL STORAGE BASE
// $( "button" ).click( function() {
//     var value,
//       div = $( "div" )[ 0 ];
//     switch ( $( "button" ).index( this ) ) {
//     case 0 :
//       value = jQuery.data( div, "blah" );
//       break;
//     case 1 :
//       jQuery.data( div, "blah", "hello" );
//       value = "Stored!";
//       break;
//     case 2 :
//       jQuery.data( div, "blah", 86 );
//       value = "Stored!";
//       break;
//     case 3 :
//       jQuery.removeData( div, "blah" );
//       value = "Removed!";
//       break;
//     }
//     $( "span" ).text( "" + value );
//   });



// localStorage.setItem('time9', '');

const time9 = document.getElementById('time9');
const btn9 = document.getElementById('btn9');

btn9.onclick = function (){
    const nue = time9.value;
    const ve  = btn9.value;
    // console.log(nue);
    // console.log(ve);

localStorage.setItem('time9',time9);
localStorage.setItem('btn9',btn9);
};
// same butten to delete it once pressed again
// JSON.parse(window.localStorage.getItem('time9'));    ???



// 10
const time10 = document.getElementById('time10');
const btn10 = document.getElementById('btn10');

btn10.onclick = function (){
    const di = time10.value;
    const ez  = btn10.value;
    console.log(di);
    console.log(ez);
};



// // 11
// const time11 = document.getElementById('time11');
// const btn11 = document.getElementById('btn11');

// btn11.onclick = function (){
//     const onc = time11.value;
//     const nce  = btn11.value;
//     console.log(onc);
//     console.log(nce);
// };


// // 12
// const time12 = document.getElementById('time12');
// const btn12 = document.getElementById('btn12');

// btn12.onclick = function (){
//     const doc = time12.value;
//     const oce  = btn12.value;
// };



// // 13
// const time13 = document.getElementById('time13');
// const btn13 = document.getElementById('btn13');

// btn9.onclick = function (){
//     const nue = time9.value;
//     const ve  = btn9.value;
//     console.log(nue);
//     console.log(ve);
// };


// // 14
// const time9 = document.getElementById('time9');
// const btn9 = document.getElementById('btn9');

// btn9.onclick = function (){
//     const nue = time9.value;
//     const ve  = btn9.value;
//     console.log(nue);
//     console.log(ve);
// };


// // 15
// const time9 = document.getElementById('time9');
// const btn9 = document.getElementById('btn9');

// btn9.onclick = function (){
//     const nue = time9.value;
//     const ve  = btn9.value;
//     console.log(nue);
//     console.log(ve);
// };


// // 16
// const time9 = document.getElementById('time9');
// const btn9 = document.getElementById('btn9');

// btn9.onclick = function (){
//     const nue = time9.value;
//     const ve  = btn9.value;
//     console.log(nue);
//     console.log(ve);
// };


// // 17
// const time9 = document.getElementById('time9');
// const btn9 = document.getElementById('btn9');

// btn9.onclick = function (){
//     const nue = time9.value;
//     const ve  = btn9.value;
//     console.log(nue);
//     console.log(ve);
// };




// function messageBox () {
// if the button is pressed. save/delete the message box.
// var saved = document.getElementById('#save');
// var resets = document.
// localStorage.setItem ('messageBox','');
// document.getElementById('time9').innerHTML = localStorage.getItem('messageBox');


// button.addEvenListener ('click', function(event){
//     event.preventDefault();}


// console.log(messageBox)
// savemessageBox();

// localStorage.getItem ('time9','time10','time11');
// console.log (localStorage)

// function populateStorage() {
//     localStorage.setItem('bgcolor', 'red');
//     localStorage.setItem('font', 'Helvetica');
//     localStorage.setItem('image', 'myCat.png');
//   }
// // TEST

//   $( "button" ).click( function() {
//     var value,
//       div = $( "container" )[ 0 ];
//     switch ( $( "button" ).index( this ) ) {
// // lock/save the info so it doesn't get deleted when refreshing the page.
//     case "lock" :
//       jQuery.data( input, "text");
//       value = "";
//       break;
//     //   remove unlock so it will delete once reload page.
//     case 2 :
//       jQuery.removeData( input, "text" );
//       value = "";
//       break;
//     }
//     $( "span" ).text( "" + value );
//   });


