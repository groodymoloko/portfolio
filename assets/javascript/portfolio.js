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

    $("#emailButton").click(function() {
        window.open('mailto:vanpatterson@gmail.com');
    });
    
    $("#resumeButton").click(function() {
        resumePdf = VanPattersonResume2.pdf
        window.open(resumePdf);
    });



});