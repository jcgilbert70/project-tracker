var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('MMMM D, YYYY [at] h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#dateTime')
    update();
    setInterval(update, 1000);
});