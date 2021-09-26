
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
console.log(currentHour)

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
$( "button" ).click( function() {
    var value,
      div = $( "div" )[ 0 ];
    switch ( $( "button" ).index( this ) ) {
    case 0 :
      value = jQuery.data( div, "blah" );
      break;
    case 1 :
      jQuery.data( div, "blah", "hello" );
      value = "Stored!";
      break;
    case 2 :
      jQuery.data( div, "blah", 86 );
      value = "Stored!";
      break;
    case 3 :
      jQuery.removeData( div, "blah" );
      value = "Removed!";
      break;
    }
    $( "span" ).text( "" + value );
  });



// TEST

  $( "button" ).click( function() {
    var value,
      div = $( "div" )[ 0 ];
    switch ( $( "button" ).index( this ) ) {
// lock/save the info so it doesn't get deleted when refreshing the page.
    case "lock" :
      jQuery.data( input, "blah");
      value = "Stored!";
      break;
    //   remove unlock
    case 2 :
      jQuery.removeData( input, "blah" );
      value = "Unlock";
      break;
    }
    $( "span" ).text( "" + value );
  });