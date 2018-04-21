$(function () {
    var parseListUrl = "http://www.135editor.com/html_parsers/lists";
    $.get(parseListUrl).then(function (data) {
        var parseLists=$(data).find("#tpl-tab-content");
        var parseContainer = $("<div></div>").append(parseLists);
        $("#ParsersItems").html(parseContainer.html());

    });


});
