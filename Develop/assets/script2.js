

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



// storage

// var messageBox = function {


    if (saveBtn) {
        $('#musicLeftBtn').show();
        $("#musicFormGrp").hide();
        var songOrderedList = document.createElement("ol");
        $('.text-error').remove();

        for (var i = 0; i < data.toptracks.track.length; i++) {
            var songItem = document.createElement("li");
            var songName = document.createElement("a");
            $(songName).attr("href", data.toptracks.track[i].url);
            $(songName).attr("target", "_blank");
            $(songName).text(data.toptracks.track[i].name);
            $(songItem).append(songName);
            $(songOrderedList).append(songItem);
            $("#songList").append(songOrderedList);
        }
    } else {
        $(errorMsgEl).text(data.message);
        $(errorMsgEl).addClass("text-error");
        $("#musicFormGrp").append(errorMsgEl);
    }

for (var i = 9; i < 18; i++) {

    Object.addEventLisatener('click', saveBtn)
    var messageBox = 'messageBox' + i
    if (onclick.saveBtn) {
    // console.log(timeBox)
    var messageInput = document.getElementsByClassName(messageBox)
    messageInput.value = localStorage.getItem('messageBox')
} else {
    localStorage.removeItem('messageBox', messageBox)
}
};


// for (var i = 9; i < 18; i++){
// var messageBox = 'messageBox' + i
// $()
// };
// $("#saveBtn").click(function () {
//     $("#messageBox").addClass("active");
//     $("#musicLeftBtn").hide();
// });
// var messageBox = getItem('messageBox');

// $("#saveBtn").click(function() {
//     // get the user's input
//     var saveBtn = $("#messageBox").val()
//     // exec get weather
//     getmessageBox(saveBtn);
//     // store user input in local storage
//     localStorage.setItem("messageBox", JSON.stringify(saveBtn));
// });
// for (var i = 0; i < 18; i++) {
//     var messageBox = document.getElementsByClassName('messageBox');
//     var saveBtn = document.getElementsByClassName('saveBtn');
//     saveBtn.onclick = function () {
//         localStorage.setItem('messageBox', messageBox.value);

//         // localStorage.removeItem('time9', time9.value)
//     };
// }
    // const time10 = document.getElementById('time10');
    // const btn10 = document.getElementById('btn10');
    // btn10.onclick = function () {
    //     localStorage.setItem('time10', time10.value);

    //     localStorage.removeItem('time10', time10.value)
    // };

// const time11 = document.getElementById('time11');
// const btn11 = document.getElementById('btn11');
// btn11.onclick = function (){
// localStorage.setItem('time11', time11.value);

// localStorage.removeItem('time11', time11.value)
// };


// const time12 = document.getElementById('time12');
// const btn12 = document.getElementById('btn12');
// btn12.onclick = function (){
// localStorage.setItem('time12', time12.value);

// localStorage.removeItem('time12', time12.value)
// };


// const time13 = document.getElementById('time13');
// const btn13 = document.getElementById('btn13');
// btn13.onclick = function (){
// localStorage.setItem('time13', time13.value);

// localStorage.removeItem('time13', time13.value)
// };

// const time14 = document.getElementById('time14');
// const btn14 = document.getElementById('btn14');
// btn14.onclick = function (){
// localStorage.setItem('time14', time14.value);

// localStorage.removeItem('time14', time14.value)
// };

// const time15 = document.getElementById('time15');
// const btn15 = document.getElementById('btn15');
// btn15.onclick = function (){
// localStorage.setItem('time15', time15.value);

// localStorage.removeItem('time15', time15.value)
// };


// const time16 = document.getElementById('time16');
// const btn16 = document.getElementById('btn16');
// btn16.onclick = function (){
//     if  (btn)
// localStorage.setItem('time16', time16.value);

// localStorage.removeItem('time16', time16.value)
// };


// const time17 = document.getElementById('time17');
// const btn17 = document.getElementById('btn17');
// btn17.onclick = function (){
// localStorage.setItem('time17', time17.value);

// localStorage.removeItem('time17', time17.value)
// };
