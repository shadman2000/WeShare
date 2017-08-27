$(document).ready(function(){
    $(".scrolla").scrolla({
        mobile:true
    });
    $("#section1").paroller();
});


    



function initMap(){
    
    var usa = [[36.2116522, -113.7155883],[38.3679748,-105.2357827]];
    var map = new google.maps.Map(document.getElementById('googlemaps'), {
      zoom: 4,
      center: new google.maps.LatLng(36.2116522,-113.7155883)
    });
    
    for(var i = 0; i < usa.length ; i++){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(usa[i][0],usa[i][1]),
            map: map
        });
    };
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            map.seCenter(46.6190205,48.9108997);
        });
    }
                                    
    else{
        alert("Your Browser does not support geolocation or please allow your browser to get your current location.");
    }

};

