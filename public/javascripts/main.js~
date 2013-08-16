$(function(){
	//====================== 瀑布流 调用Masonry Start
	
	var $container = $('#container');
		$container.masonry({
		// 设置选项
		itemSelector : '.box',//class 选择器
		columnWidth : 0 ,//一列的宽度 Integer
		isAnimated:true,//使用jquery的布局变化  Boolean
		animationOptions:{
		//jquery animate属性 渐变效果  Object { queue: false, duration: 500 }
		},
		gutterWidth:5,//列的间隙 Integer
		isFitWidth:true,// 适应宽度   Boolean
		isResizableL:true,// 是否可调整大小 Boolean
		isRTL:false,//使用从右到左的布局 Boolean
		});
	
	//当需要排列图片div时，需要调用：
	$container.imagesLoaded(function(){
	  $container.masonry({
	    itemSelector : '.box',
	    
	    singleMode: true,
	    isAnimated: !Modernizr.csstransitions
		
	  });
	});

	// 瀑布流 调用Masonry End ======================

	//*****************************************************************************

	//====================== 翻页下拉加载 调用Infinitescroll Start
	$container.infinitescroll({
	navSelector : '#page-nav', //分页导航的选择器
	nextSelector : '#page-nav a', //下页连接的选择器
	itemSelector : '.box', //你要检索的所有项目的选择器
	loadingText : "...",
	loading: {
	finishedMsg: 'No more pages to load.',//结束显示信息
	//img: 'http://i.imgur.com/6RMhx.gif'//loading图片
	}

	},
	//作为回调函数触发masonry
	function( newElements ) {
	// 当加载时隐藏所有新项目
	var $newElems = $( newElements ).css({ opacity: 0 });
	// 在添加到masonry布局之前保证图片载入
	$newElems.imagesLoaded(function(){
	// 现在可以显示所有的元素了
	$newElems.animate({ opacity: 1 });
	$container.masonry( 'appended', $newElems, true );
	});
	});
	// 翻页下拉加载 调用Infinitescroll End ======================

	//$(".clear").load("/masonry");
});
