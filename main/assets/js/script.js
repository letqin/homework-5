let date = $("today");
let time = moment().format("dddd, MMMM Do");
let save = $("save");
const data = localStorage;

$("today").text(moment().format("MM Do YYYY, hh:mm:ss a"));

function getTime() {
    let hour = moment().hours();

    $(".time-block").each(function () {
        let currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("upcoming");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
};

$(".saveBtn").click(function (event) {
    event.preventDefault();
    let text = $(this).siblings(".time-block").val();
    let time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, text)
});

getTime();
