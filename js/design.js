$(document).ready(function() {
    $.getJSON("json/design.json", function(result) {
        var designArr;
        $.each(result, function(i, field) {
            designArr = field;
        });
        for (i = 0; i < designArr.length; i++) {
            var title = designArr[i].title;


            var array_value = $.map(designArr[i], function(value, index) {
                    return value;
                }),
                array_index = $.map(designArr[i], function(value, index) {
                    return index;
                });
            $(".design-section").append('<div class="design-contents"><h2>' + title + '</h2></div>');
            $.each(designArr[i], function(index, value) {
                if (index != 'title') {
                    $(".design-section").append('<p><a href="/DesignHostingApp' + value + '" target="_blank">' + index + '</a></p>');
                }
            });

        }
    });


});
$(function() {
    $(".design-section").accordion();
});

