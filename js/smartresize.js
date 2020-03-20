// build time:Fri Mar 20 2020 18:19:30 GMT+0800 (GMT+08:00)
+function(i,e){var n=function(i,e,n){var r;return function t(){var t=this,u=arguments;function f(){if(!n){i.apply(t,u)}r=null}if(r){clearTimeout(r)}else if(n){i.apply(t,u)}r=setTimeout(f,e||100)}};jQuery.fn[e]=function(i){return i?this.bind("resize",n(i)):this.trigger(e)}}(jQuery,"smartresize");
//rebuild by neat 