"use strict";!function(){var n={init:function(){this.caching_Dom(),this.languaje(),this.binding_events()},caching_Dom:function(){this.$hed=$("header"),this.$icon=this.$hed.find("i"),this.$head_menu=$(".header-menu")},languaje:function(){var n=navigator.language||navigator.userLanguage;n.match(/es/g)?console.log("es"):console.log("en")},binding_events:function(){this.$icon.on("click",function(){n.menu()})},menu:function(){this.$head_menu.toggleClass("on")}};n.init()}();