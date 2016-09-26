"use strict";
(function(){
  var func = {
    init: function(){
      this.caching_Dom();
      this.binding_events();
    },
    caching_Dom: function(){
      this.$hed = $('header');
      this.$icon = this.$hed.find('i');
      this.$head_menu = $('.header-menu');
      this.$ban = $('.banner');
      this.$pics = $('.banner').find('div');
    },
    binding_events: function(){
      this.on_events(this.$icon,'click',function(){func.menu();});
      this.banner(this.$ban);
    },
    on_events: function(a,b,c){
      a.on(b,c);
    },
    off_events: function(a,b){
      a.off(b);
    },
    menu: function(){
      this.$head_menu.toggleClass('on');
    },
    banner: function(id){
      /* Setting Images */
      $.getJSON('/json/banner.json',function(data){
         for(var i in data.home){
          var lt,z;
          /* position to left */
          i == 0 ? lt = 0 : lt = 200
          /* z - index */
          i == 0 ? z = 1 : z = 0
          var write = '<div style="background-image:url('+data.home[i].src+');left:'+lt+'%;z-index:'+z+'"></div>';
          id.append(write);
          /* Validate if it is the last picture */
          i == (data.home.length - 1) ? func.banner_animation(data.home.length - 1) : null
         }
         func.languaje();
      });
    },
    banner_animation: function(count){
      /* Running the animation */
      setInterval(function(){
        /* Adding to the dom */
        this.$pics = $('.banner').find('div');
        this.$bndiv = $('.banner').attr('data-img');
        var d = parseInt(this.$bndiv);
        var z,l; /* z-index , left */
        this.$pics.eq(d).animate({
          'left': 0,
          'z-index': 2
        },0);
        setTimeout(function(){
          for (var i = 0; i < (count + 1); i++) {
            var l,z;
            d == i ? z = 2 : z = 0
            d == i ? l = 0 : l = 200
              this.$pics.eq(i).css({
                'left': ''+l+'%',
                'z-index': z
              });
          }
        },2500);
        d == count ? $('.banner').attr('data-img', '0') : $('.banner').attr('data-img',''+( d + 1 )+'')
      }, 7000);
    },
    languaje: function(){
      var userLang = navigator.language || navigator.userLanguage;
        userLang.match(/es/g) ? $.getJSON('/json/es.json',function(data){ func.setting_text(data) })
        :
        $.getJSON('/json/en.json',function(data){ func.setting_text(data) });
    },
    setting_text: function(data){
      for(var i in data.banner){
        $('.banner').find('div').eq(i).append('<h2>'+data.banner[i].info+'</h2><p>'+data.banner[i].button+'</p>');
      }
    }
  }
  func.init();
})();
