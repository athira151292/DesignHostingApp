$(document).ready(function() {
    $.getJSON("json/design.json", function(result) {
        var designArr;
        $.each(result, function(i, field) {
            designArr = field;
        });
        for (i = 0; i < designArr.length; i++) {
            var array = $.map(designArr[i], function(value, index) {
                return value;
            });
            console.log(array);
            for (j = 0; j < array.length; j++)
                $(".design-wrap").append('<a>' + array[j] + '</a>');
        }
    });
});
