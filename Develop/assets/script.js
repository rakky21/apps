
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



var messageInput = document.querySelector('#time9');
var messageInput = document.querySelector('#time10');
var messageInput = document.querySelector('#time11');
var messageInput = document.querySelector('#time12');
var messageInput = document.querySelector('#time13');
var messageInput = document.querySelector('#time14');
var messageInput = document.querySelector('#time15');
var messageInput = document.querySelector('#time16');
var messageInput = document.querySelector('#time17');


var messagenine = localStorage.getItem('time9');
var messageten = localStorage.getItem('time10');
var messageeleven = localStorage.getItem('time11');
var messagetwelve = localStorage.getItem('time12');
var messagethirteen = localStorage.getItem('time13');
var messagefourteen = localStorage.getItem('time14');
var messagefiften = localStorage.getItem('time15');
var messagesixteen = localStorage.getItem('time16');
var messageseventeen = localStorage.getItem('time17');



localStorage.setItem('time9', );
localStorage.setItem('time10', );
localStorage.setItem('time11', );
localStorage.setItem('time12', );
localStorage.setItem('time13', );
localStorage.setItem('time14', );
localStorage.setItem('time15', );
localStorage.setItem('time16', );
localStorage.setItem('time17', );





// function messageBox () {
// if the button is pressed. save/delete the message box.
var saved = document.getElementById('#save');
var resets = document.
localStorage.setItem ('messageBox','');
document.getElementById('time9').innerHTML = localStorage.getItem('messageBox');


button.addEvenListener ('click', function(event){
    event.preventDefault();}


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



