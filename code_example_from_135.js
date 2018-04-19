function getSelectionHtml(outer){
	var range=current_editor.selection.getRange();
	if(range.startContainer.tagName=='BODY'&&range.startContainer===range.endContainer&&range.endOffset>0&&range.endOffset===range.startContainer.childNodes.length)
	{return getEditorHtml(outer);} 
	
	}
	
	function setDealingHtml(newHtml)
	{
		newHtml=jQuery.trim(newHtml);
		var html=getSelectionHtml();
		if(html!=""){insertHtml(newHtml);
		custom_style_set=true;
		current_editor.undoManger.save();
		return;
	} 
	
	function insertHtml(html,rules){
	html=current_editor.parseInsertPasteSetHtml(html);
	var select_html=jQuery.trim(getSelectionHtml(true));
	if(select_html!="")
	{if(rules){var select_obj=jQuery('<div>'+select_html+'</div>');
	select_obj.find('*').each(function(){jQuery(this).removeAttr('style');
	jQuery(this).removeAttr('class');jQuery(this).removeAttr('placeholder');});
	for(var i in rules['replace']){select_obj.find(i).each(function(){if(!rules['replace'][i]||rules['replace'][i]==""){jQuery(this).replaceWith(jQuery(this).html());
	} 
	
	
function getEditorHtml( outer ){
	
	$( current_editor.selection.document ).find('p').each(function(){
		if($.trim(strip_tags($(this).html()))=="&nbsp;") {
			$(this).html('<br/>');
		}
		else if($.trim( strip_tags($(this).html()) )=="") { //由于各种编辑操作可能使内容包含了多余的空段落标签，需要去除(不含图片，不含换行)。如“<p><span style="font-size: 12px; "></span></p >”
			//
			if($(this).find('img,audio,iframe,mpvoice,video').size() > 0) {
				return;
			}
			if($(this).find('br').size() > 0) {
				$(this).html('<br/>');
			}
			else{
				if(!this.style.clear ) {
					$(this).remove();
				}
			}
		}
	});
	
	clean_135helper();

    var outers = $( current_editor.selection.document ).find('.article135,[data-role=outer],[label*=135editor]');
	
	if( outers.length > 1 ) {
        for(var i=outers.length-1;i>0;i--) {
            var $this = outers.eq(i);
            if( $this.get(0).style.backgroundColor && $this.get(0).style.backgroundColor != "" || $this.css('background-image') && $this.css('background-image')!='none') {
                $this.removeAttr('class');$this.removeAttr('label');
            }
            else{
                $this.replaceWith($this.html()); //文章中包含article135的class标签通通去掉，只保留内部的内容。
            }
        }
    }
	
	var html = '';
	if( current_editor.getWxContent && !outer ) {		
		html = current_editor.getWxContent();	
	}
	else{
		html = current_editor.getContent();
	}
	html = parse135EditorHtml( html );	
	//return html;
	// 最外层增加一个节点，粘贴微信时，就不会生成多余的空格。 	
	//return $.trim(html);
	return '<section data-role="outer" label="Powered by 135editor.com" style="font-size:16px;">'+ $.trim(html) + '</section>';
}

	