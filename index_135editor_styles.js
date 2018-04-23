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

    var val = getSelectionHtml();

    var targetNode = $(this).clone();
    if ($.trim(selectedTxt)) {
        if (targetNode.find("section.135brush,p.135brush").length) {
            targetNode.find("section.135brush:last,p.135brush:last").html(val);
        }
        else {
            targetNode.find("p").html(val);
        }

    }
   
    ue.execCommand("inserthtml", targetNode.html());
}


function getSelectionHtml() {

    var current_editor = UE.getEditor('editor');

    var range = current_editor.selection.getRange();
    range.select();
    var selectionObj = current_editor.selection.getNative();
    var rangeObj = selectionObj.getRangeAt(0);
    var docFragment = rangeObj.cloneContents();
    var testDiv = document.createElement("div");
    testDiv.appendChild(docFragment);
    var selectHtml = testDiv.innerHTML;
    if (selectHtml == "") {
        return "";
    }
    return testDiv;
} 