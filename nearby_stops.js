function get_nearby_stops(fn)
{
    // check if they have html5 geolocation
    if(navigator.geolocation)
    {
        /* get user location and find nearest stops */
        navigator.geolocation.watchPosition(
            function(position)
            {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                
                // find nearby stops
                var base_url = "http://runextbus.herokuapp.com/nearby/";

                var xhr = new XMLHttpRequest();

                xhr.open("GET", base_url + lat + "/" + lon, true);

                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4)
                    {
                        var stop_data = jQuery.parseJSON(xhr.responseText);
                        var nearest_stops = Object.keys(stop_data);

                        fn(nearest_stops);
                        return;
                    }
                };

                xhr.send();
            }
        );
    }
}
