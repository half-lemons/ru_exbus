console.log(get_bus_times("Hill Center"));
//busch - purple
//c.ave - yellow
//livi - blue
//c/d - green

// a b c ee f h wk1 wk2 all sum1 sum2

// JSON feed

var jsonData = new XMLHttpRequest();
var json_url = "http://runextbus.herokuapp.com/stop/Hill%20Center";

//var location_url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCWkgXSQPLEfkBfTg1fgjQ_uEZABRMIh5c"

// var geocoder = new google.maps.Geocoder();
// var address = document.getElementById("address").value;

// geocoder.geocode( { 'address': address}, function(results, status) {
// 	if (status == google.maps.GeocoderStatus.OK){
// 		var lat = results[0].geometry.location.latitude;
//       	var lon = results[0].geometry.location.longitude;
//   	}
// });

var bus_time;
function color_code(bus_time){
	if(bus_time <= 5){
		body += '<button type="button" class="btn btn-danger">';
	}
	if(bus_time > 5 && bus_time <= 10){
		body += '<button type="button" class="btn btn-warning">';
	}
	if(bus_time > 10){
		body += '<button type="button" class="btn btn-success">';
	}	
}

//jsonData.open("GET",json_url,true);
//jsonData.send();

//var location = showPosition();


/*jsonData.onload = setInterval(function() {
    if (jsonData.status === 200){
        responsiveObject = JSON.parse(jsonData.responsiveText);
    }
    console.log(responsiveObject);

    var body; // the body of all the times encased in the buttons

    for(var i = 0; i < responsiveObject.length; i++){
    	body += '<div class = container>';
        
        if (responsiveObject[i].predictions == "null"){
                continue;
        }

    	for(var j = 0; j < responsiveObject.predictions[j]; i++){
                body += "<td>"+responsiveObject.title+"</td>";
    			body += "<td>"+color_code(responsiveObject.predictions[j]);
        		body += responsiveObject.predictions[j]+'</button></td>';
    	}
    	body += '</div>';
    }
	document.getElementById('info_html').innerHTML = body;
    },1000);*/

// default
// find location

// have var body += for all the routes for the location
// api retrieves all the routes for that location (bus stop)
	// for each route = <div> tag
		// read each time as time_slot and color code
	// </div>
// refresh

// 2 ajax properties:
	// first one dependent on location
		// google long/lat
		// display closest bus stop
		// shuts off if default is checked off
	// second one dependent on first and updates the table of routes & times of that location
		// if off saves last stop that was opened

function load_nearby_stops()
{
    // get user location
    // load nearby stops into html
}

// start everything up
$(document).ready(
    function()
    {
        // get user location and put all nearby stops in dropdown
        // populate table with bus times for nearest stop
    }
);
