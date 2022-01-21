let date = $("#currentDay");
let time = moment().format("dddd, MMMM Do");
let save = $(".saveBtn");
const data = localStorage;

$("today").text(moment().format("MMMM Do YYYY, hh:mm:ss a"));

function getTime() {
    let hour = moment().hours();

    $(".time-block").each(function () {
        let currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
};

$(".saveBtn").click(function (event) {
    event.preventDefault();
    let time = $(this).parent().attr("id").split("-")[1];
    let value = $(this).siblings(".time-block").val();
    localStorage.setItem(time, value)
});

$("#hour-08 .time-block").val(localStorage.getItem("08"));
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));


getTime();
