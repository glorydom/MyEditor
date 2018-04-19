$(function () {
    var filterUrl = 'http://www.135editor.com/editor_styles/styles?inajax=1&page=1&free=0&fav=fav&sort=favor:desc&filter=';
    $("[data-filter]").click(function () {
        // alert($(this).attr('data-filter'));
        var url = filterUrl + $(this).attr('data-filter');
        $.get(url).then(function (data) {
            $(".style-result").html(data);
        });
    });


    $(".style-result").on("click", "li", function () {
        var htmlValue = $(this).html();
        // alert(htmlValue);
        UE.getEditor('editor').execCommand('insertHtml', htmlValue);
    });
});