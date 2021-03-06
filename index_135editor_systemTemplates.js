$(function () {
    var templateCache = {};
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

    $("#systemTemplates").on("click", ".popup-template-detail>._135editor section._135editor", applyStyle);

    //在模板上弹出 秒刷 插入 按钮
    function popupTemplateOptions() {
        var templateId = $(this).attr("id").split("-")[2];
        var url = "http://www.135editor.com" + templateCache[templateId];

        var cover = $("<div></div>").css("background-color", "gray")
            .css("position", "absolute")
            .css("top", "0px")
            .css("z-index", 1)
            .addClass("btn-group-vertical")
            .addClass("cover");
        var miaoshua = $("<button class='btn btn-default btn-lg' style='margin-bottom:10px; margin-top:40px;'></button>")
            .css("margin-right", "10px")
            .on("click", function () {
                var templateContainer = $("<div class='pre-scrollable' style='padding:2px;max-height:700px'></div>")
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
                    var templateContainerBodySection$ = templateContainerBody$.find("section._135editor");
                    templateContainerBodySection$.css({
                        border: '1px solid rgb(221, 221, 221)',
                        padding: '10px',
                        boxSizing: 'border-box',
                        margin: '5px 0px',
                        opacity: 1
                    });
                    //将image中的data-src改成src
                    filterAttr(templateContainerBody$);

                    var templateHtml = templateContainerBody$.html();
                    console.log(templateHtml);
                    templateContainer.append($(templateHtml));
                });

                $('#systemTemplates').append(templateContainer);
            });
            
        var charu = $("<button class='btn btn-default btn-lg' style='margin-top:10px;'></button>")
            .on("click", function () {
                var ue = UE.getEditor('editor');
                var range = ue.selection.getRange();
                range.select();
                $.get(url).then(function (data) {
                    var templateContentBody = $(data).find(".Content-body");
                    filterAttr(templateContentBody);
                    var templateHtml = templateContentBody.html();
                    ue.execCommand("inserthtml", templateHtml);
                });
            });

        //给秒刷 插入按钮添加个icon 美化按钮
        var icon_miaoshua = $("<span class='glyphicon glyphicon-edit' aria-hidden='true'>秒刷</span>")
        var icon_charu = $("<span class='glyphicon glyphicon-log-in' aria-hidden='true'>插入</span>")
        miaoshua.append(icon_miaoshua);
        charu.append(icon_charu);
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

    //某些节点的属性不被识别，对这些属性进行修改，传入的事JQuery  object
    function filterAttr(node) {
        node.find("[data-src]").each(function (index, entity) {
            var dataSrc = $(entity).attr("data-src");
            $(entity).attr("src", dataSrc);
        });
    }


    //点击个人模板，将模板放在左侧样式里
    $("[href='#personalTemplates']").click(function () {

        if (!$.trim($("#personalTemplates").html())) {
            var url = '/template_list.asp?ismine=true';
            $.get(url).then(function (data) {
                var html = $.html(data).text();
                $("#personalTemplates").html(html);
            });

            var dummyHtml = '<div class="personalTempContainer" data-id="1"><section class="_135editor" style="border: 0px none;"><p style="margin: 0">    <br/></p><p style="margin: 0">    <br/></p><p style="margin: 0">    <br/></p><section class="_135editor" style="border: 0px none;">    <section style="padding: 10px">        <section style="width: 100%;text-align: center;">            <section style="width: 160px;margin: 0 auto">                <img src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvdU4xTElhdjdvSmljNFZlNXZVVWJ5QTl3M21kdXJNbzJrbE1FSXpubVdISjNWNGRGaHFQd1dMQmZKVWVuSWQzNmt4Nm8yODFKRUVyZEI1dWhrbzB4cXFRLzA/d3hfZm10PXBuZw==" style="width: 100%;display: block;" alt="d3hfZm10PXBuZw=="/>            </section>            <section style="display: inline-block;width: auto;padding:0 5px;border: 1px solid #555;color: #555;border-radius: 5px;;line-height: 25px">                <p style="margin: 0">                    愿快乐驱赶你的烦恼，温馨随后跟你奔跑                </p>            </section>        </section>    </section></section> </div>';
            $("#personalTemplates").html(dummyHtml);
        }
    });
    //点击其他模板，将模板放在左侧样式里
    $("[href='#otherColleagueTemplates']").click(function () {

        if (!$.trim($("#otherColleagueTemplates").html())) {
            var url = '/template_list.asp';
            $.get(url).then(function (data) {
                var html = $.html(data).text();
               
                $("#otherColleagueTemplates").html(html);
            });
        }
    });

    $("#personalTemplates").on("click", ".personalTempContainer", applyStyle);
    $("#otherColleagueTemplates").on("click", ".personalTempContainer", applyStyle);
    
    $("#personalTemplates").on("mouseenter", ".personalTempContainer", showDeleteIcon);
    $("#personalTemplates").on("mouseleave", ".personalTempContainer", hideDeleteIcon);

    $("#personalTemplates").on("click", ".glyphicon.glyphicon-trash.del", delTemplate);


    //当鼠标进入个人模板或者同事模板的时候，显示删除按钮
    function showDeleteIcon(){
        var divHeight = $(this).height();
        var icon_del = $("<span class='glyphicon glyphicon-trash del' aria-hidden='true'></span>").css("top",divHeight-5)
                        .css("left", $(this).width()-10);

        $(this).append(icon_del);
    }
    function hideDeleteIcon(){
        $(this).find(".del").remove();
    }

    function delTemplate(event){
        alert("del");
        event.stopPropagation();//阻止冒泡
    }

});

