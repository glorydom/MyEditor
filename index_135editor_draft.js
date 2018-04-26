$(function () {
    $('a[href="#editor-draft"]').on('click', function () {
        var draftListUrl = './article_draft_list.asp';
        if (!$.trim($("#editor-draft").html())) {
            $.get(draftListUrl, function (data) {
                if (data) {
                    $("#editor-draft").html(data);
                }
            });
        }
    });
});