// build time:Mon Mar 23 2020 16:07:59 GMT+0800 (GMT+08:00)
$(document).ready(function(){var t=$("#QRBox");var o=$("#MainBox");function n(n){if(n){o.css("background-image","url("+n+")")}$("#DonateText,#donateBox,#github").addClass("blur");t.fadeIn(300,function(t){o.addClass("showQR")})}$("#donateBox>li").click(function(t){var o=$(this).attr("qr");if(o){n(o)}});o.click(function(n){o.removeClass("showQR").addClass("hideQR");setTimeout(function(n){t.fadeOut(300,function(t){o.removeClass("hideQR")});$("#DonateText,#donateBox,#github").removeClass("blur")},600)})});!function(t,o,n){var e=document.currentScript||function(){var t=document.getElementsByTagName("script");return t[t.length-1]}();var s=$(e).attr("successtext");var a=new ClipboardJS("#BTC");a.on("success",function(t){console.log(s);if(s){toastr.options={positionClass:"toast-top-center",timeOut:"1000"};toastr.success(s)}})}(window,document);
//rebuild by neat 