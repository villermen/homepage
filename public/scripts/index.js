$(document).ready(function() {
    $(".project-buttons").masonry({
        itemSelector: ".project-button",
        columnWidth: 155,
        fitWidth: true,
        transitionDuration: 0
    });
});

// Clock
var weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// Get it, date? Tough crowd today...
function upDate() {
    var date = new Date();
    var hours = ("0" + date.getHours()).slice(-2);
    var minutes = ("0" + date.getMinutes()).slice(-2);
    var seconds = ("0" + date.getSeconds()).slice(-2);
    var dateString = weekdays[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate();
    var timestamp = Math.floor(date.getTime() / 1000);

    if ($(".clock__digit--hours").text() != hours) {
        $(".clock__digit--hours").text(hours);
    }
    if ($(".clock__digit--minutes").text() != minutes) {
        $(".clock__digit--minutes").text(minutes);
    }
    if ($(".clock__digit--seconds").text() != seconds) {
        $(".clock__digit--seconds").text(seconds);
    }
    if ($(".clock__date").text() != dateString) {
        $(".clock__date").text(dateString);
    }
    if ($(".clock__timestamp").text() != timestamp) {
        $(".clock__timestamp").text(timestamp);
    }

    // Teehee
    if (hours == 13 && minutes == 33 && seconds == 37) {
        var audio = new Audio("/soundboard/api/samples/sfx/airhorn2.ogg");
        audio.play();
    }

    //schedule next update at it\'s changing point
    setTimeout(upDate, 1000 - date.getMilliseconds());
}

if ($(".clock").html("<div class='clock__digit clock__digit--hours'></div><div class='clock__digit clock__digit--minutes'></div><div class='clock__digit clock__digit--seconds'></div><div class='clock__date'></div><div class='clock__timestamp'></div>").length > 0) {
    // Prime upDate()
    upDate();
}
