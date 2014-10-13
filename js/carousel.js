$(document).ready(function() {
 
  $("#services-slider").owlCarousel({
 
      navigation: false,
      slideSpeed: 300,
      autoPlay: 5000,
      pagination: false,
      paginationSpeed: 1500,
      singleItem: false,
      itemsCustom: [[0, 1], [580, 2]],
      itemsScaleUp: true,
      autoHeight: true
 
  });
  $("#testimos-slider").owlCarousel({
 
      navigation: false,
      slideSpeed: 300,
      autoPlay: 10000,
      pagination: false,
      singleItem: true,
      itemsScaleUp: true,
      stopOnHover: true,
      autoHeight: false
 
  });
});