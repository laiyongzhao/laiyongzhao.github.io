!function($){function t(){h=$(window).width()>m}function e(){h&&$(w).hover(function(){imgId=$(this).attr("id"),$(C).addClass("active"),$('[data-id="'+imgId+'"]').addClass("active"),$(g).addClass("hidden"),$("body, html").on("scroll touchmove mousewheel",function(t){return t.preventDefault(),t.stopPropagation(),!1})},function(){$(g).removeClass("hidden"),$(C).removeClass("active"),$(".image-container").removeClass("active"),$("body, html").off("scroll touchmove mousewheel")})}function o(){$(document).on("mousemove",function(t){$("body").addClass("is-mouse"),f=!0})}function n(){Modernizr.touchevents&&$(".close, .index-full").on("click",function(){$(g).removeClass("hidden"),$(C).removeClass("active"),$(".image-container").removeClass("active")})}function s(t){h&&$(document).on("mousemove",function(t){$("a:hover").length?$(".cursor").addClass("active"):$(".cursor").removeClass("active"),$(".group").find("img:hover").length?(_timing=1==y?250:0,clearTimeout(v),$(".caption, .cursor").stop().animate({opacity:1},_timing),v=setTimeout(function(){$(".caption, .cursor").stop().animate({opacity:0},500)},1500),y=!0):($(".caption").stop().css({opacity:0}),$(".cursor").stop().css({opacity:1}),y=!1)})}function a(){$(document).on("mousemove",function(t){$(".cursor").css({transform:"translate("+t.clientX+"px ,"+t.clientY+"px)"})}),$("a:hover").length&&$(".cursor").css({background:"blue"})}function i(){h&&$(".contact-link").hover(function(){_text=$("#name").attr("data-contact"),$("#name").text(_text),void 0==_text&&$("#name").text("SEEK°")},function(){$("#name").text("SEEK°")})}function c(){h||($(window).on("scroll",function(){$("body").hasClass("has-scrolled")||$("body").addClass("has-scrolled"),_offset=$(document).scrollTop(),_pageHeight=$(document).height()-1e3,_offset<=10?$("#name").text("SEEK°"):_offset>_pageHeight?$("#name").addClass("hidden"):$("#name").removeClass("hidden")}),$(document).ready()&&$("img").on("inview",function(t,e){e&&$("body").hasClass("has-scrolled")&&(_alt=$(this).attr("alt"),console.log(_alt),$("#name").text(_alt))}))}function l(){p=$("html, body"),p.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",function(){p.velocity("stop")})}function r(){$(".scrolltop").on("click",function(){return l(),$("html").velocity("scroll",{offset:0,easing:"easeInOutQuad",duration:1200,mobileHA:!1}),h||setTimeout(function(){$("#name").text("SEEK°")},1200),!1})}function u(){$('a[href*="#"]:not([href="#"])').on("click",function(){if(p.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",function(){p.stop()}),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $(p).animate({scrollTop:t.offset().top-32},1400,"",function(){}),!1}})}function d(){var t=document.body,e;window.addEventListener("scroll",function(){clearTimeout(e),t.classList.contains("disable-hover")||t.classList.add("disable-hover"),e=setTimeout(function(){t.classList.remove("disable-hover")},500)},!1)}var m=752,h,f,v=null,g=$("header"),p=$("html, body"),y,w=$("img"),C=$(".index-full");t(),$(window).resize(function(){t()}),e(),o(),n(),s(),a(),$("#coverletter").on("click",function(){$(this).fadeOut(300)}),$("#content").imagesLoaded(function(){$("#loader").fadeOut(300),$(".index-img").addClass("visible"),$(".load-after").each(function(){_src=$(this).attr("data-src"),_srcset=$(this).attr("data-srcset"),$(this).attr("srcset",_srcset).removeAttr("data-srcset"),$(this).attr("src",_src).removeAttr("data-src")})}),i(),c(),r(),u(),d(),$(window).resize(function(){t(),c(),i(),o(),s(),e()}),$(window).keydown(function(t){t.metaKey&&73==t.which?$("body").toggleClass("inverted"):t.shiftKey&&t.metaKey&&85==t.which&&$("body").toggleClass("grayscale")})}(jQuery);