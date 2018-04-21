$(function () {
    var filterUrl = 'http://www.135editor.com/editor_styles/styles?inajax=1&page=1&free=0&fav=fav&sort=favor:desc&filter=';
    $("[data-filter]").click(function () {
        // alert($(this).attr('data-filter'));
        var url = filterUrl + $(this).attr('data-filter');
        $.get(url).then(function (data) {
            $(".style-result").html(data);
            $(".style-result").find("ul.editor-template-list>li>div").remove();
        });
    });

    $(".style-result").on("click", "li", applyStyle);
});

//Ueditor编辑器里面选中内容之后，点击左侧样式，该样式将被应用在选中的内容上
function applyStyle() {
    var ue = UE.getEditor('editor');
    var range = ue.selection.getRange();
    range.select();
    var selectedTxt = ue.selection.getText();
    var targetNode = $(this).clone();
    if ($.trim(selectedTxt)) {
        targetNode.find("p").text(selectedTxt);
    }
    ue.execCommand("inserthtml", targetNode.html());
}