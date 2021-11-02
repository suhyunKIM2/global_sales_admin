$(function(){
     includeLayout();
     });
     function includeLayout(){
        var includeArea= $('[data-include]');
        var self, url;
        $.each(includeArea, function(){
            self= $(this);
            url= self.data("include");
            self.load(url, function(){
                self.removeAttr("data-include");
            });
        });
     }
    $(window).load(function() {

      $(".content_table").css('visibility','visible').animate({opacity:1},300);

    });