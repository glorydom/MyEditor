$(function () {
    var parseListUrl = "http://www.135editor.com/html_parsers/lists";
    $.get(parseListUrl).then(function (data) {
        var parseLists=$(data).find("#tpl-tab-content");
        var parseContainer = $("<div></div>").append(parseLists);
        $("#ParsersItems").html(parseContainer.html());

    });


});

function html_parsers(q) {
    var query = {
        id: 0,
        skip_title: '',
        title_text_num: 20,
        image_desc: '',
        html: ''
    };

    for (var key in q) {
        if (q.hasOwnProperty(key)) {
            query[key] = q[key];
        }
    }

    var promise = new Promise(function (resolve, reject) { });

    var url = 'http://www.135editor.com/html_parsers/parse/' + query.id + '?inajax=1';
    return new Promise(function (resolved, rejected) {
        $.post(url, { skip_title: query.skip_title, title_text_num: query.title_text_num, image_desc: query.image_desc, html: query.html }, function (data) {
            if (data) {
                data = JSON.parse(data);
                if (data.ret === 0) {
                    resolved(data.html);
                }
                else {
                    rejected(data);
                }
            } else {
                rejected(data);
            }
        });
    });
}


// $(function () {
//     //调用的例子
//     var html = 'html: <section data-role="outer" label="Powered by 135editor.com" style="font-size:16px;"><p style="line-height: 25.6px; white-space: normal;color: rgb(0, 122, 170); font-size: 14px; line-height: 25.6px;" data-role="author" done="true">你是慧飞的飞飞</p><p style="line-height: 25.6px; white-space: normal;color: rgb(0, 122, 170); font-size: 14px; line-height: 25.6px;" data-role="author" done="true"><br></p><section class="domhelper"><section data-tools="135编辑器" class="_135editor" data-id="88405" style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; border: 0px none;"><section style="margin-top: 10px; margin-bottom: 10px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><section style="margin-left: auto; max-width: 100%; width: 2.5em; box-sizing: border-box !important; word-wrap: break-word !important;"><section style="max-width: 100%; width: 2.5em; border-top-width: 1px; border-top-style: solid; border-top-color: #9e9e9e; box-sizing: border-box !important; word-wrap: break-word !important;"></section><section style="margin-top: -0.5em; margin-left: 2em; max-width: 100%; height: 1.4em; border-left-width: 1px; border-left-style: solid; border-left-color: #9e9e9e; box-sizing: border-box !important; word-wrap: break-word !important;"></section></section><section style="padding-right: 1em; padding-left: 1em; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><section data-style="font-size: 14px; color: rgb(160, 160, 160); line-height: 1.8;" style="padding: 10px; max-width: 100%; font-size: 14px; color: #a0a0a0; line-height: 1.8; box-sizing: border-box !important; word-wrap: break-word !important;"><p style="max-width: 100%; min-height: 1em; line-height: 1.8; text-align: left; box-sizing: border-box !important; word-wrap: break-word !important;" done="true"><span style="color: #888888; font-size: 16px;"></span><span style="font-size: 16px;">慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞慧飞</span><span style="font-size: 16px; color: #888888;"></span></p></section></section><section style="margin-bottom: -0.5em; margin-left: 0.5em; max-width: 100%; height: 1.4em; border-left-width: 1px; border-left-style: solid; border-left-color: #9e9e9e; box-sizing: border-box !important; word-wrap: break-word !important;"></section><section style="max-width: 100%; width: 2.5em; border-top-width: 1px; border-top-style: solid; border-top-color: #9e9e9e; box-sizing: border-box !important; word-wrap: break-word !important;"></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="88661" style="font-size: 16px; line-height: 25.6px; white-space: normal; border: 0px none; box-sizing: border-box;"><section style="margin-top: 10px; margin-bottom: 10px;  box-sizing: border-box; word-wrap: break-word !important;"><section style="padding-top: 3px; padding-left: 3px;  box-sizing: border-box; width: 18px; float: left; word-wrap: break-word !important;"><section style="margin-top: -3px; margin-right: -1px;  box-sizing: border-box; width: 3px; height: 3px; float: right; border-radius: 3px; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section><section style=" box-sizing: border-box; width: 15px; height: 15px; border-top-width: 1px; border-top-style: solid; border-color: rgb(160, 160, 160); border-left-width: 1px; border-left-style: solid; word-wrap: break-word !important;"><section style="margin-top: -3px; margin-left: -3px;  box-sizing: border-box; width: 3px; height: 3px; border-radius: 3px; float: left; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section></section><section style="margin-bottom: -1px; margin-left: -3px;  box-sizing: border-box; width: 3px; height: 3px; border-radius: 3px; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section></section><section style="padding-top: 3px; padding-right: 3px;  box-sizing: border-box; width: 18px; float: right; word-wrap: break-word !important;"><section style="margin-top: -3px; margin-right: -1px;  box-sizing: border-box; width: 3px; height: 3px; float: left; border-radius: 3px; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section><section style=" box-sizing: border-box; width: 15px; height: 15px; border-top-width: 1px; border-top-style: solid; border-color: rgb(160, 160, 160); border-right-width: 1px; border-right-style: solid; word-wrap: break-word !important;"><section style="margin-top: -3px; margin-right: -3px;  box-sizing: border-box; width: 3px; height: 3px; border-radius: 3px; float: right; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section></section><section style="margin-right: -3px; margin-bottom: -1px;  box-sizing: border-box; width: 3px; height: 3px; border-radius: 3px; float: right; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section></section><section style=" box-sizing: border-box; clear: both; word-wrap: break-word !important;"></section><section style="margin: -25px 3px; padding: 10px;  box-sizing: border-box; min-height: 60px; word-wrap: break-word !important;"><section style="padding: 10px 5px;  box-sizing: border-box; word-wrap: break-word !important;"></section></section><section style="padding-bottom: 3px; padding-left: 3px;  box-sizing: border-box; width: 18px; float: left; word-wrap: break-word !important;"><section style="margin-top: -1px; margin-left: -3px;  box-sizing: border-box; width: 3px; height: 3px; border-radius: 3px; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section><section style=" box-sizing: border-box; width: 15px; height: 15px; border-bottom-width: 1px; border-bottom-style: solid; border-color: rgb(160, 160, 160); border-left-width: 1px; border-left-style: solid; word-wrap: break-word !important;"></section><section style="margin-top: -3px; margin-left: -3px;  box-sizing: border-box; width: 3px; height: 3px; border-radius: 3px; float: left; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section><section style="margin-top: -3px; margin-right: -1px;  box-sizing: border-box; width: 3px; height: 3px; float: right; border-radius: 3px; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section></section><section style="padding-top: 3px; padding-right: 3px;  box-sizing: border-box; width: 18px; float: right; word-wrap: break-word !important;"><section style="margin-top: -1px; margin-right: -3px;  box-sizing: border-box; width: 3px; height: 3px; float: right; border-radius: 3px; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section><section style=" box-sizing: border-box; width: 15px; height: 15px; border-bottom-width: 1px; border-bottom-style: solid; border-color: rgb(160, 160, 160); border-right-width: 1px; border-right-style: solid; word-wrap: break-word !important;"></section><section style="margin-top: -3px; margin-left: -1px;  box-sizing: border-box; width: 3px; height: 3px; border-radius: 3px; float: left; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section><section style="margin-top: -3px; margin-right: -3px;  box-sizing: border-box; width: 3px; height: 3px; float: right; border-radius: 3px; word-wrap: break-word !important; background-color: rgb(240, 89, 91);"></section></section><section style=" box-sizing: border-box; clear: both; word-wrap: break-word !important;"></section></section></section></section>';
//     var id = 59;
//     html_parsers({ id: id, html: html }).then(function (data) {
//         console.log(data);//data就是返回的html，直接插入到编辑器里
//     });

// });
