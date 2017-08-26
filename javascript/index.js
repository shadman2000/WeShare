$(document).ready(function(){
    $(".scrolla").scrolla();
    $("#section1").paroller();
});



function initMap(){
    var usa = {lat: 36.2116522, lng: 113.7155883};
    var map = new google.maps.Map(document.getElementById('googlemaps'), {
      zoom: 4,
      center: usa
    });
    var marker = new google.maps.Marker({
      position: usa,
      map: map
    });
}