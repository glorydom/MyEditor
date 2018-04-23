$(function () {
    //var firstStyles = "http://www.135editor.com/editor_styles/styles?inajax=1&page=1&free=0&fav=fav&filter=undefined&sort=favor:desc";

    var filterUrl = 'http://www.135editor.com/editor_styles/styles?inajax=1&page=1&free=0&fav=fav&sort=favor:desc&filter=';
    var stylesFirstpage = filterUrl + "undefined";
    loadStyleFrom135Server(stylesFirstpage);

    $("[data-filter]").click(function () {
        // alert($(this).attr('data-filter'));
        var url = filterUrl + $(this).attr('data-filter');
        loadStyleFrom135Server(url);
    });

    $(".style-result").on("click", "li", applyStyle);
});


function loadStyleFrom135Server(url) {
    $.get(url).then(function (data) {
        $(".style-result").html(data);
        $(".style-result").find("ul.editor-template-list>li>div").remove();
    });
}

//Ueditor编辑器里面选中内容之后，点击左侧样式，该样式将被应用在选中的内容上
function  applyStyle() {
    var  ue  =  UE.getEditor('editor');
    var  range  =  ue.selection.getRange();
    range.select();
    var  selectedTxt  =  ue.selection.getText();

    var  val  =  getSelectionHtml();
    console.log(val);

    var  targetNode  =  $(this).clone();
    if  ($.trim(selectedTxt)) {
        targetNode.find("p").html(val);
    }

    console.log(targetNode.html());
    ue.execCommand("inserthtml",  targetNode.html());
}

