// build time:Mon Mar 23 2020 13:41:37 GMT+0800 (GMT+08:00)
+function(i){"use strict";var t=function(t){this.$codeBlocks=i(t)};t.prototype={run:function(){var t=this;t.resize();i(window).smartresize(function(){t.resize()})},resize:function(){var t=this;t.$codeBlocks.each(function(){var t=i(this).find(".gutter");var r=i(this).find(".code");var n=r.width()-r.innerWidth();var e=i(this).outerWidth()-t.outerWidth()+n;r.css("width",e);r.children("pre").css("width",e)})}};i(document).ready(function(){i.fn.hasHorizontalScrollBar=function(){return this.get(0).scrollWidth>this.innerWidth()};var r=new t("figure.highlight");r.run()})}(jQuery);
//rebuild by neat 