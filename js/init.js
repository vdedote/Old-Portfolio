function checkScroll(){
    var startY = $('.navbar-fixed').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar-fixed').addClass("scrolled");
    }else{
        $('.navbar-fixed').removeClass("scrolled");
    }
}

if($('.navbar-fixed').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$(document).ready(function(){
    $('.collapsible').collapsible();
  });

$(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
      $('.sidenav').sidenav();
    });

    $(document).ready(function(){
    $('.slider').slider();
  });

  $(document).ready(function(){
   $('.materialboxed').materialbox();
 });

 // Auto Scrooll Function to Home
 $(document).on('click', '#ScrolltoTop', function(event)
 {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 800);
 });

 // Auto Scrooll Function to About
 $(document).on('click', '#ScrolltoAbout', function(event)
 {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 800);
 });

 // Auto Scrooll Function to What I do
 $(document).on('click', '#Scrolltowhatido', function(event)
 {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 800);
 });

 // Auto Scrooll Function to Toolbox
 $(document).on('click', '#ScrolltoToolbox', function(event)
 {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 800);
 });

 // Auto Scrooll Function to Toolbox
 $(document).on('click', '#ScrolltoPortfolio', function(event)
 {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 800);
 });

 // Auto Scrooll Function to Toolbox
 $(document).on('click', '#ScrolltoCOntact', function(event)
 {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 800);
 });
