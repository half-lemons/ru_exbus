function get_nearby_stops(fn)
{
    // check if they have html5 geolocation
    if(!navigator.geolocation)
    {
        // should handle this.....
    }

    /* get user location and find nearest stops */
    navigator.geolocation.watchPosition(
        function(position)
        {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            url = "http://runextbus.herokuapp.com/nearby/" + lat + "/" + lon;

            // find nearest stops
            $.ajax({
                url: url,
                method: 'GET',
                success: function(data, status){
                    if(status === 'error'){
                        // should handle this.....
                    }

                    fn( Object.keys(data) );

                    return;
                }
            });
        }
    );

}
