define(['jquery'],function($){
  var meta = {
    event_click: function(b,f){
      setTimeout(function(){
        this.$div = $(b).find(f);
        this.$div.on('click',function(){
          $('html, body').animate({
             scrollTop: $(".products").offset().top
          }, 1000);
        });
      },500);
    },
    languaje: function(){
      var userLang = navigator.language || navigator.userLanguage;
        userLang.match(/es/g) ? $.getJSON('/json/products/es.json',function(data){ meta.load_products(data) })
        :
        $.getJSON('/json/products/en.json',function(data){ meta.load_products(data) });
    },
    load_products: function(data){
      console.log(data);
      setTimeout(function(){
        this.$prd = $('.products');
        var y = '<h1>'+data.sections[0].text+'</h1><div></div>';
        this.$prd.append(y);
        this.$arDiv = this.$prd.find('div');
        for(var i in data.products.Armonizaciones){
          var x = `
                  <div data="ar${i}">
                   <div style="background-image:url(${data.products.Armonizaciones[i].src});"></div>
                    <div>
                      <h5>${data.products.Armonizaciones[i].desc}</h5>
                      <p>${data.products.Armonizaciones[i].precio}</p>
                      <span>${data.text}</span>
                    </div>
                  </<div>
                `;
           this.$arDiv.append(x);
        }
      },200);
    }
  };
  return meta;
});


