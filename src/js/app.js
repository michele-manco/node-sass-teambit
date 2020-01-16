$('.menu-items').click(function() {
  $('.dropd-menu').slideUp();
  if (!$(this).children('.dropd-menu').is(':visible')) {
    $(this).children('.dropd-menu').slideDown()
  }
});
