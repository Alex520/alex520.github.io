/*
	JS:JavaScript,是一门基于web浏览器的脚本
	语言，无法独立运行(NodeJS除外)；同时js也是
	一门弱类型以及基于事件驱动的程序设计语言
	JS的核心组成部分
	ECMAScript 基础语法
	BOM模型 Browse Object Model
	DOM模型 Document Object Model
*/
//标志位，标记歌曲是否在播放
var isplay = false;
//获取页面中播放音频资源的播放器对象
var player = document.getElementById('player');
//根据元素的id属性获取元素对象,并且绑定一个点击事件
document.getElementById('musicBox').addEventListener('click', function() {
	//判断当前歌曲是否正在播放(执行开关操作)
	if(isplay) {
		isplay = false; //标记停止播放
		player.pause(); //暂停
		this.title = "点击播放";
		this.className = 'music-box'; //改变元素的class
	} else {
		isplay = true; //标记开始播放
		player.play(); //开始
		this.title = "点击静音";
		this.className = 'music-box play';
	}
});



