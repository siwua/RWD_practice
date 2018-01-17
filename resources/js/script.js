$(document).ready(function() {
    
    /* Sticky navigation */
    //   var waypoints = $('#handler-first').waypoint(function(direction) {
    //      notify(this.element.id + ' hit 25% from top of window') 
    //    }, {
    //      offset: '25%'
    //    }) 
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '300px'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    // Select all links with hashes
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target: $('[name=' + this.name.slice(1) *']');
                
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $targer.attr('tabindex', '-1');
                            $target.focus();
                        }
                    });
                }
            }
        })
    });
    
    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    // Fix the problem of disappearance of normal nav-bar 
    // after click mobile-nav and resizing back to size > 767px
    $(window).resize(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    /*  Maps */
    var map = new GMaps({
      div: '.map',
      lat: -12.043333,
      lng: -77.028333,
      zoom: 12
    });
    
    map.addMarker({
      lat: -12.043333,
      lng: -77.028333,
      title: 'Lima',
//      click: function(e) {
//        alert('You clicked in this marker');
//      }
      infoWindow: {
          content: '<p>HQ</p>'
      } 
        
    }); 
});