$(document).ready(function() {

    $('#currentDay').text(moment().format("dddd, MMMM Do"))
    $(".saveBtn").on('click', function(event) {

    event.preventDefault();

    var userText = $(this).siblings(".text").val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, userText);

    $('.notification').addClass("show")

    setTimeout(function(){
        $('.notification').removeClass("show")
    }, 5000)
    });

    function keepCurrentTime() {
        var currentHour = moment().hours();

        $('.time-block').each(function () {
            var timeBlockHour = parseInt($(this).attr('id').split('-')[1])
            if(timeBlockHour < currentHour) {
                $(this).addClass("past")
            } else if (timeBlockHour === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            };
        })
    }

    keepCurrentTime();

    $("#hour-9 .text").val(localStorage.getItem('hour-9'))
    $("#hour-10 .text").val(localStorage.getItem('hour-10'))
    $("#hour-11 .text").val(localStorage.getItem('hour-11'))
    $("#hour-12 .text").val(localStorage.getItem('hour-12'))
    $("#hour-13 .text").val(localStorage.getItem('hour-13'))
    $("#hour-14 .text").val(localStorage.getItem('hour-14'))
    $("#hour-15 .text").val(localStorage.getItem('hour-15'))
    $("#hour-16 .text").val(localStorage.getItem('hour-16'))
    $("#hour-17 .text").val(localStorage.getItem('hour-17'))
})