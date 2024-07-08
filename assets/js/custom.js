// $(".toggle").click(function(){

//   $("header").toggleClass("menuToggle");

// });

$(".toggle").click(function() {
    $("header").addClass("menuToggle");
});
$(".close").click(function() {
    $("header").removeClass("menuToggle");
});





$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
        $('header').addClass('fixed-header');
        $('header').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header').removeClass('visible-title');
    }
});







// $('.contless-button').click(function() {
//   $(this).prev('.moretextt').slideToggle();
//   if ($(this).html() == 'Veja mais <i class="fa-solid fa-angle-down"></i>') {
//     $(this).html('Veja menos');
//   } else {
//     $(this).html('Veja mais <i class="fa-solid fa-angle-down"></i>');
//   }
// });

$('.contless-button').click(function() {
  $(this).prev('.moretextt').slideToggle();
  
  if ($(this).html().includes('Veja mais')) {
    $(this).html('Veja menos <i class="fas fa-angle-up"></i>');
  } else {
    $(this).html('Veja mais <i class="fas fa-angle-down"></i>');
  }
});



$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Veja mais") {
    $(this).text("veja menos")
  } else {
    $(this).text("Veja mais")
  }
});
AOS.init({
    duration: 1200,
  })