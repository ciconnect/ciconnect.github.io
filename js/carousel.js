
$(document).ready(function() {
 
  $("#carousel").owlCarousel({
 
      navigation: true,
      slideSpeed: 300,
      autoPlay: 5000,
      paginationSpeed: 2000,
      singleItem: false,
      items: 2,
      itemsDesktop: true,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
});