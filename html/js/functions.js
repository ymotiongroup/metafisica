"use strict";
(function(){
  var func = {
    init: function(){
      this.caching_Dom();
      this.languaje();
      this.binding_events();
    },
    caching_Dom: function(){
       this.$hed = $('header');
       this.$icon = this.$hed.find('i');
       this.$head_menu = $('.header-menu');
    },
    languaje: function(){
      var userLang = navigator.language || navigator.userLanguage;
        if (userLang.match(/es/g))
          console.log('es');
        else
          console.log('en');
    },
    binding_events: function(){
      this.$icon.on('click',function(){
        func.menu()
      });
    },
    menu: function(){
      this.$head_menu.toggleClass('on');
    }
  }
  func.init();
})();
