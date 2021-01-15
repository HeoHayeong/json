
function myMap(){

    var mapProp ={
        center :  new google.maps.LatLng(37.402196, 127.103438),
        zoom : 15
    }
    
    var map = new google.maps.Map(
        document.getElementById("nexonMap"), mapProp
    );

    var myPos1 = {lat: 37.402196, lng:127.103438}
    var marker1 = new google.maps.Marker({
        position: myPos1,
        animation: google.maps.Animation.BOUNCE
    })
    marker1.setMap(map);
    
    google.maps.event.addListener(marker1, 'click', function(){
        
        zoomLevel = map.getZoom();
        map.setZoom(zoomLevel +1)
    })

    // var infoWindow = new google.maps.InfoWindow({
    //     content: "넥슨 코리아"
    // });  
    // infoWindow.open(map, marker1);
        

    // 37.394926, 127.111132

    var myPos2 = {lat: 37.394926, lng: 127.111132}
    var marker2 = new google.maps.Marker({position: myPos2})
    marker2.setMap(map);

    // var infoWindow = new google.maps.InfoWindow({
    //     content: "신분당선 판교역"
        
    // });  

    // infoWindow.open(map, marker2);
}