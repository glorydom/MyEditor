$(function () {

    //保存为草稿
    $("#save-as-draft").on('click', function () {
        var html = UE.getEditor('editor').getContent();
        var url = './article_draft_add.asp';
        $.post(url, { content: html }, function (data) {
            if (data) {
                var draftListUrl = './article_draft_list.asp';
                $.get(draftListUrl, function (data) {
                    if (data) {
                        $("#editor-draft").html(data);
                    }
                });
                alert('保存为草稿成功！');
            }
        });
    });
    //保存为模板
    $("#save-as-template").on('click', function () {
        var html = UE.getEditor('editor').getContent();
        var url = './article_template_add.asp';
        $.post(url, { content: html }, function (data) {
            if (data) {
                alert('保存为模板成功！');
            }
        });
    });
});
