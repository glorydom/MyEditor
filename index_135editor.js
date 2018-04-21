$(function () {
    var templateCache = {};
    var filterUrl = 'http://www.135editor.com/editor_styles/styles?inajax=1&page=1&free=0&fav=fav&sort=favor:desc&filter=';
    $("[data-filter]").click(function () {
        // alert($(this).attr('data-filter'));
        var url = filterUrl + $(this).attr('data-filter');
        $.get(url).then(function (data) {
            $(".style-result").html(data);
        });
    });

    //点击系统模板，将模板放在左侧样式里
    $("[href='#systemTemplates']").click(function () {

        if (!$.trim($("#systemTemplates").html())) {
            var url = 'http://www.135editor.com/editor_styles/systemTemplates';
            $.get(url).then(function (data) {
                templateCache = cacheTemplatesInfo(data); //统计所有的template的相关信息
                var templateHtml = $(data).find("#system-template-list").html();
                $("#systemTemplates").html(templateHtml);
            });
        }
    });

    $("#systemTemplates").on("mouseenter", ".style-list", popupTemplateOptions);
    $("#systemTemplates").on("mouseleave", ".style-list", hideTemplateOptions);
    // $(".style-result").on("click", "li", function () {
    //     var htmlValue = $(this).html();
    //     // alert(htmlValue);
    //     UE.getEditor('editor').execCommand('insertHtml', htmlValue);
    // });
    $(".style-result").on("click", "li", applyStyle);

    $("#systemTemplates").on("click", ".popup-template-detail>._135editor section._135editor", applyStyle);



    //Ueditor编辑器里面选中内容之后，点击左侧样式，该样式将被应用在选中的内容上
    function applyStyle() {
        var ue = UE.getEditor('editor');
        var range = ue.selection.getRange();
        range.select();
        var selectedTxt = ue.selection.getText();
        var targetNode = $(this).clone();
        targetNode.find("p").text(selectedTxt);
        ue.execCommand("inserthtml", targetNode.html());

    }

    //在模板上弹出 秒刷 插入 按钮
    function popupTemplateOptions() {
        var templateId = $(this).attr("id").split("-")[2];
        var url = "http://www.135editor.com" + templateCache[templateId];

        var cover = $("<div></div>").css("background-color", "gray")
            .css("position", "absolute")
            .css("top", "70px")
            .css("z-index", 1)
            .addClass("cover");
        var miaoshua = $("<button class='btn'>秒刷</button>")
            .css("margin-right", "10px")
            .on("click", function () {
                var templateContainer = $("<div style='padding:2px;'></div>")
                    .addClass("tab-pane active popup-template-detail")
                    .css("background-color", "white")
                    .css("position", "absolute")
                    .css("top", 0)
                    .css("left", 0)
                    .css("z-index", 2);
                var closeTitle = $("<p>样式模板</p>");
                var closeContainer = $("<button class='btn'></button>").text("关闭")
                    .on("click", function () {
                        templateContainer.remove();

                    });
                templateContainer.append(closeTitle);
                templateContainer.append(closeContainer);
                $.get(url).then(function (data) {
                    var templateContainerBody$ = $(data).find(".Content-body");
                    var templateContainerBodySection$=templateContainerBody$.find("section._135editor");
                    templateContainerBodySection$.css({
                        border: '1px solid rgb(221, 221, 221)',
                        padding: '10px',
                        boxSizing: 'border-box',
                        margin: '5px 0px',
                        opacity: 1
                    });
                    //将image中的data-src改成src
                    templateContainerBody$.find("[data-src]").each(function (index, entity) {
                        var dataSrc = $(entity).attr("data-src");
                        $(entity).attr("src", dataSrc);
                    });
                    var templateHtml = templateContainerBody$.html();
                    console.log(templateHtml);
                    templateContainer.append($(templateHtml));
                });

                $('#systemTemplates').append(templateContainer);
            });
        var charu = $("<button class='btn'></button>")
            .text("插入")
            .on("click", function () {
                var ue = UE.getEditor('editor');
                var range = ue.selection.getRange();
                range.select();
                $.get(url).then(function (data) {
                    // console.log($(data).find("#system-template-list").html());
                    var templateHtml = $(data).find(".Content-body").html();
                    ue.execCommand("inserthtml", templateHtml);
                });
            });

        cover.append(miaoshua);
        cover.append(charu);
        $(this).append(cover);
    }


    //隐藏 秒刷 插入按钮
    function hideTemplateOptions() {
        $(this).find(".cover").remove();
    }




    //统计模板的id与该模板的url关联关系
    // eg. <div class="style-list clearfix" id="editor-style-91571">
    // ......
    //  <a href="/editor_styles/20180103/91571.html" target="_blank">电影推送 模板</a>
    function cacheTemplatesInfo(html) {
        var cache = {};
        $(html).find(".style-list").each(function () {
            var id = $(this).attr("id");
            id = id.split("-")[2];
            cache[id] = $(this).find("a[target='_blank']").attr("href");
        });
        return cache;
    }

});

