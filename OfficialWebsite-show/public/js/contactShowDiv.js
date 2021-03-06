/* jshint esversion:6 */

$("#showWindow").on("click", function() {
  if ($(".joinDivShow").css("display") == "none") {
    setTimeout(function() {
      $(".joinDivShow").fadeIn();
      $(".headTop")[0].style.cssText = "opacity: 1;";
    }, 100);
    setTimeout(() => {
      $(".contentDiv")[0].style.cssText = "height:100%";
    }, 500);
  } else {
    $(".joinDivShow").fadeOut();
  }
});
// 联系我们窗口
$("#closeDiv").on("click", function() {
  $(".joinDivShow")[0].style.cssText = "display: none;";
  $(".headTop")[0].style.cssText = "opacity: 0;";
  $(".contentDiv")[0].style.cssText = "height:0%";
});

$(".closeWindow").on("click", () => {
  $(".joinDivShow").fadeOut();
});
$(".joinOff").on("click", () => {
  $(".joinDivShow").fadeOut();
});

// //禁用右键（防止右键查看源代码）
// window.oncontextmenu = function() {
//   return false;
// };
// //禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具）
// window.onkeydown = window.onkeyup = window.onkeypress = function() {
//   window.event.returnValue = false;
//   return false;
// };
// 如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面
// var h = window.innerHeight, w = window.innerWidth;
// window.onresize = function () {
//     if (h != window.innerHeight || w != window.innerWidth) {
//         window.close();
//         window.location = "about:blank";
//     }
// }
