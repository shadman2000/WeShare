$(document).ready(function(){
    $(".scrolla").scrolla({
        mobile:true
    });
    $("#section1").paroller();
});


    



function initMap(){
    
    var map = new google.maps.Map(document.getElementById('googlemaps'), {
      zoom: 4,
      center: new google.maps.LatLng(36.2116522,-113.7155883)
    });
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            map.setMarker(new google.maps.Marker({
                position:new google.maps.LatLng(pos.lat,pos.lng),
                map:map
            }));
        });
    }
}
