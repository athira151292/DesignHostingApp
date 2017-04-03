$(document).ready (function() {
    $.getJSON("json/design.json", function (result) {
        var designArr;
        $.each(result, function(i, field) {
            designArr = field;
        });
        var length = designArr.length;
        for (i = 0; i < length; i++) {
            var title = designArr[i].title;
            $(".design-section").append('<div class="design-block"><h2>' + title + '</h2></div>');
            $.each(designArr[i], function(index, value) {
                if (index != 'title') {
                    $(".design-block").last().append('<p><a href="/DesignHostingApp' + value + '" target="_blank">' + index + '</a></p>');
                }
            });
        }
    });
});
