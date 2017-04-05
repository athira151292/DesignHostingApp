$(document).ready(function() {

    $.getJSON("json/design.json", function(result) {
        document.title = result.project + " Mock Designs";
        if ($(".design-wrap").length > 0) {
            var designArr;
            $.each(result, function(i, field) {
                designArr = field;
            });
            var length = designArr.length;
            for (i = 0; i < length; i++) {
                var title = designArr[i].title,
                    desginUrl = designArr[i];
                $(".design-section").append('<div class="design-block"><h2>' + title + '</h2></div>');
                $.each(desginUrl, function(index, value) {
                    if (index != 'title') {
                        var val = value.split('.').pop(),
                            lastElement = $(".design-block").last();
                        if (val == "html")
                            lastElement.append('<p><a href="/DesignHostingApp' + value + '"  target="_blank">' + index + '</a></p>');
                        else
                            lastElement.append('<p><a href="/DesignHostingApp/design.html" target="_blank" data-url=' + value + '>' + index + '</a></p>');
                        $(".design-block a").on("click auxclick", function(e) {
                            var url = $(this).attr("data-url");
                            localStorage.setItem('desgin', url);
                        });
                    }
                });
            }
        }
    });

    if ($(".design-image").length > 0) {
        var item = localStorage.getItem('desgin');
        $(".design-image").append("<img src=" + "/DesignHostingApp" + item + ">");
    }
});
