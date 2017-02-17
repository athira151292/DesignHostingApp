$(document).ready(function() {
    $.getJSON("json/design.json", function(result) {
        var designArr;
        $.each(result, function(i, field) {
            field[i].push(designArr);
        });
        for (i = 0; i < designArr.length; i++)
            $(".design-wrap").append('<a>' + designArr[i].title + '</a>');
    });
});
