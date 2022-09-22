$(document).foundation();

/*Sticky Header*/
  $(function () {
      $(window).on("scroll", function () {
          if ($(window).scrollTop() > 100) {
              $(".header").addClass("header-sticky");
          } else {
              $(".header").removeClass("header-sticky");
          }
      });
  });
/*Sticky Header*/

/*banner slider */
var swiper = new Swiper(".banner-slide", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*banner slider */

/* Burgur menu */
  // $(document).ready(function(){
  //   $('.btn-burger').click(function(){
  //     $(this).toggleClass('open');
  //     if($(this).hasClass('open')) {
  //       $("html").addClass("overflow-hidden");
  //     } else {
  //       $("html").removeClass("overflow-hidden");
  //     }
  //   });
  //   $('.is-overlay-fixed').click(function(){
  //     if($(this).hasClass('is-closable')) {
  //       $("html").addClass("overflow-hidden");
  //     } else {
  //       $("html").removeClass("overflow-hidden");
  //     }
  //   });
  //   $('.menu-icon').click(function(){
  //     $(this).toggleClass('open');
  //   });
  //   $('.menu-icon').click(function(){
  //     if($(this).hasClass('open')) {
  //       $(".top-bar-navbar").addClass("open");
  //       $("html").addClass("overflow-hidden");
  //     } else {
  //       $(".top-bar-navbar").removeClass("open");
  //       $("html").removeClass("overflow-hidden");
  //     }
  //   });
  //   const closeMenu1 = document.querySelector('.menu-icon');
  //   const hasCollapsible = document.querySelectorAll('.menu-item-has-children');
  //   $('.menu-item-has-children').siblings().removeClass('active');
  //   hasCollapsible.forEach(function(otherCollapsible) {
  //     closeMenu1.addEventListener('click', function() {
  //         otherCollapsible.classList.remove('active');
  //     });
  //   });
  //   hasCollapsible.forEach(function(collapsible) {
  //       collapsible.addEventListener('click', function() {
  //           collapsible.classList.toggle('active');

  //           hasCollapsible.forEach(function(otherCollapsible) {
  //               if (otherCollapsible !== collapsible) {
  //                   otherCollapsible.classList.remove('active');
  //               }
  //           });
  //       });
  //   });
  // });
/* Burgur menu */

/* Back to top */
  var btn = $('#BackToTop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  $('.title-bar').click(function (e) {
    e.stopPropagation();
    $('.top-bar').toggleClass('open');
    $('body').toggleClass('top-bar-open');
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
/* Back to top */