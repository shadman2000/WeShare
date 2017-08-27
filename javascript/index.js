$(document).ready(function(){
    $(".scrolla").scrolla({
        mobile:true
    });
    $("#section1").paroller();
});



function getLocation(){
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentLocation(showPosition);
    }
    else{
        alert("Your Browser does not support geolocation. Please update your browser or try a different one");
    }
};

function showPosition(positions){
    var lat = positions.coords.latitude;
    var long = positions.coords.longitude;
    console.log(lat,long);
}


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
    }
};

