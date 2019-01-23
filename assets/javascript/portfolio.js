// load document before starting javascript
$(document).ready(function(){

    $(".quailButton").click(function() {
        $("html,body").animate({
            scrollTop: $("#artPage").offset().top },
            "slow");  
    });

    $(".scorpionButton").click(function() {
        $("html,body").animate({
            scrollTop: $("#webdevPage").offset().top },
            "slow");  
    });

    $(".coyoteButton").click(function() {
        $("html,body").animate({
            scrollTop: $("#godPage").offset().top },
            "slow");  
    });

    $(".snakeButton").click(function() {
        $("html,body").animate({
            scrollTop: $("#contactPage").offset().top },
            "slow");  
    });

    $(".saguaroButton").click(function() {
        $("html,body").animate({
            scrollTop: $("#homePage").offset().top },
            "slow");  
    });
    
    
    var myCS = { thumbnail : { borderColor: '#ffffff'} };

    $("#nanogallery2").nanogallery2( {
        // <!-- ### gallery settings ### -->
        thumbnailHeight:  200,
        thumbnailWidth:   'auto',
        itemsBaseURL:     'assets/images/',
        thumbnailHoverEffect2: 'image_scale_1.00_1.20',
        thumbnailL1Label: { "display": true, "hideIcons": true },
        thumbnailLabel: { "display": false },
        thumbnailBorderHorizontal: 0,
        thumbnailBorderVertical: 0,
        thumbnailGutterWidth: 20,
        thumbnailGutterHeight: 20,
        galleryTheme: myCS,
        galleryDisplayMode: 'pagination',
        galleryMaxRows: 3,
        galleryPaginationMode: 'numbers',
        touchAutoOpenDelay: 0,

        
        // <!-- ### gallery content ### -->
        items: [
            { src: 'art_skull.jpg', srct: 'art_skull.jpg', title: 'Art', ID: 1, kind: 'album' },
            { src: 'art_ants1.jpg', srct: 'art_ants1.jpg', title: 'Intruder', albumID: 1 },
            { src: 'art_bee1.jpg', srct: 'art_bee1.jpg', title: 'B', albumID: 1  },
            { src: 'art_beatle1.jpg', srct: 'art_beatle1.jpg', title: 'Beatle It', albumID: 1  },
            { src: 'art_blob.jpg', srct: 'art_blob.jpg', title: 'Blob Storage', albumID: 1  },
            { src: 'art_butterfly.jpg', srct: 'art_butterfly.jpg', title: 'Butterfly', albumID: 1  },
            { src: 'art_cracked.jpg', srct: 'art_cracked.jpg', title: 'Cracked', albumID: 1  },
            { src: 'art_crimemoney.jpg', srct: 'art_crimemoney.jpg', title: 'Crime Pays', albumID: 1  },
            { src: 'art_playwithfire.jpg', srct: 'art_playwithfire.jpg', title: 'Playing with Fire', albumID: 1  },
            { src: 'art_skull.jpg', srct: 'art_skull.jpg', title: 'Skullduggery', albumID: 1  },
            { src: 'art_thethinker.jpg', srct: 'art_thethinker.jpg', title: 'The Thinker', albumID: 1  },
            { src: 'art_zen.jpg', srct: 'art_zen.jpg', title: 'Zen', albumID: 1  },
            { src: 'art_zodiak.jpg', srct: 'art_zodiak.jpg', title: 'Zodiak', albumID: 1  },

            { src: 'art_thethinker.jpg', srct: 'art_thethinker.jpg', title: 'Photography', ID: 2, kind: 'album' },
            { src: 'art_ants1.jpg', srct: 'art_ants1.jpg', title: 'Intruder', albumID: 2 },
            { src: 'art_bee1.jpg', srct: 'art_bee1.jpg', title: 'B', albumID: 2  }
          ]
      });

});