import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import * as platform from "https://cdn.skypack.dev/platform@1.3.6";



$("#date").text(new Date().toLocaleDateString());

$(function(){
$('#demo1').text(new Date());
});

$(function(){
setInterval(function(){
$('#demo2').text(new Date());
}, 1000);
});

$(function(){
var now = new Date();
var y = now.getFullYear();
var m = now.getMonth() + 1;
var d = now.getDate();
var w = now.getDay();
var wd = ['日', '月', '火', '水', '木', '金', '土'];
var h = now.getHours();
var mi = now.getMinutes();
var s = now.getSeconds();
$('#demo3').text('登録日時：'+ y + '年' + m + '月' + d + '日' + h + '時' + mi + '分' + s + '秒' + '(' + wd[w] + ')');
});

$("device").text(platform.description);




let c = 21600;

setInterval(() => {
  $("sec").text(c);
  c = c - 1;
},1000)