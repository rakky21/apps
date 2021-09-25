// moment().format('MMMM Do YYYY, h:mm:ss a');


// fetch('https://momentjs.com/downloads/moment-with-locales.js')
//     .then(response => response.json())
//     .then(data => console.log(data));


// const d = new Date();
// document.getElementById("demo").innerHTML = d.getDate();


// var currentDay = document.getElementById("currentDay").value;
// document

fetch(
    'https://momentjs.com/downloads/moment-with-locales.js'
)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        // console.log(response)
        var responseContainerEl = document.querySelector('#currentDay');

        var gifImg = document.createElement('h2');

        // gifImg.setAttribute('src', response.data.image_url);

        responseContainerEl.appendChild(jummbotron);
    });

// var today = new Date();

// var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();



// need time api so the boxes turn grey once the time has passed

// 🔒 locked

// 🔓 unlocked

// ✅ scheduled 









// WIDTH OF THE COLUM
// $grid-breakpoints: (
//     xs: 0,
//     sm: 576px,
//     md: 768px,
//     lg: 992px,
//     xl: 1200px,
//     xxl: 1400px
//   );
// @include media - breakpoint - up(lg) { .custom - class {
//     display: none;
// }
//     @include media - breakpoint - up(sm) {
//     .custom - class {
//             display: block;
//         }
//     }
// }




// use varrial to creat 24 different time slots 
// var timeSlots = slots
// for (var i = 0 ; i < 24 ; i = i++);
// console.log( this)





// hover over to show locked or unlocked image