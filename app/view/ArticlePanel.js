/**
 * 기사 본문
 * 
 * */
Ext.define("NewsHolder.view.ArticlePanel",{
	extend:"Ext.Panel",
	xtype:"articlepanel",
	id:'articlePanel',
	requires:['Ext.Anim'],
	
	config:{
		layout:"fit",
		cls:"article",
		items:[{
			xtype:"panel",
			layout:"vbox",
			items:[
			   {
				   xtype:"panel",
					id:"articleContent",
					showAnimation:'slide',
					tpl:[
						   "<div id='mainArticleTitle'>",
						   		"{title}",
						   "</div>",
						   "<div onclick='font_size_buttonClick(&quot;bigger&quot;);' id='font_size_up_button'>크게+</div>", "<div onclick='font_size_buttonClick(&quot;smaller&quot;);' id='font_size_down_button'>작게-</div></br>",
						   "<div id='mainArticle' style='font-size:20px;'>{description}</div>",
					],
					styleHtmlContent:true,
					scrollable:true,
					flex:1,
					listeners:{
						swipe:{
							fn:function(event){
								var articleController = NewsHolder.app.getController("ArticleController");
								articleController.swipeEventHandler(event.direction);
							},
							element:"element"
						}
					}
			   },
			   {
				   xtype:"panel",
					id:"articleContent2",
					showAnimation:'slide',
					tpl:[
						   "<div id='mainArticleTitle'>",
						   		"{title}",
						   "</div>",
						   "<div onclick='font_size_buttonClick(&quot;bigger&quot;);' id='font_size_up_button'>크게+</div>", "<div onclick='font_size_buttonClick(&quot;smaller&quot;);' id='font_size_down_button'>작게-</div></br>",
						   "<div id='mainArticle' style='font-size:20px;'>{description}</div>",
					],
					styleHtmlContent:true,
					scrollable:true,
					hidden:true,
					flex:1,
					listeners:{
						swipe:{
							fn:function(event){
								var articleController = NewsHolder.app.getController("ArticleController");
								articleController.swipeEventHandler(event.direction);
							},
							element:"element"
						}
					}
			   },
			],
		}],
		
		
		
	},
});

function font_size_buttonClick(size){
	var article = Ext.getDom("mainArticle");
	var current = parseInt(article.style.fontSize);
	if(size=="bigger"){
		current++;
	}else{
		current--;
	}
	article.style.fontSize = current + "px";
};