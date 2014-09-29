
$(document).ready(function() {
 
  $("#carousel").owlCarousel({
 
      navigation: true,
      slideSpeed: 300,
      autoPlay: 5000,
      pagination: false,
      paginationSpeed: 1500,
      singleItem: false,
      itemsCustom: [[0, 1], [768, 2]],
      itemsScaleUp: true,
      autoHeight: true
 
  });
});