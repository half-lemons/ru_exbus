//global vars
var STOP_CHOICE = null;
var NEAREST_STOPS;

get_nearby_stops(start_extension);
//busch - purple
//c.ave - yellow
//livi - blue
//c/d - green

// a b c ee f h wk1 wk2 all sum1 sum2

// JSON feed

var bus_time;
var body = "";
function color_code(bus_time){
	if(bus_time <= 5){
		return '<button type="button" class="btn btn-danger">';
	}
	if(bus_time > 5 && bus_time <= 10){
		return '<button type="button" class="btn btn-warning">';
	}
	if(bus_time > 10){
		return '<button type="button" class="btn btn-success">';
	}
}

/*
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
/*
function load_nearby_stops()
{
    // check if they have html5 geolocation
    if(navigator.geolocation)
    {
        // get user location
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
                        stop_data = jQuery.parseJSON(xhr.responseText);
                        nearest_stops = Object.keys(stop_data);

                        // load nearby stops into dropdown

                        window.setInterval(
                            function()
                            {
                                populate_bus_table(get_bus_times(nearest_stops[0]));
                            }, 60000
                        );
                    }
                };

                xhr.send();
            }
        );
    }
}
*/

function load_nearby_stops()
{

}

function populate_bus_table(bus_data)
{
		body = "";
    var bus_names = Object.keys(bus_data);
    for(i = 0; i < bus_names.length; i++)
    {
        var name = bus_names[i];

				body += '<tr>';

				if (name == "null"){
					continue;
				}

				var time = bus_data[name];

				body += "<td>"+name+"</td>";
				for(var j = 0; j < time.length; j++)
				{
					body += "<td>"+color_code(time[j]);
					body += time[j]+'</button></td>';
				}
				body += '</tr>';
		}
	document.getElementById('info_html').innerHTML = body;
  return;
}

function start_extension(nearest_stops)
{
    NEAREST_STOPS = nearest_stops;

    $(document).ready(
        function()
        {
            //load_nearby_stops();

            window.setInterval(
                function()
                {
                    // havent gotten stops yet
                    if(!NEAREST_STOPS)
                    {
                        console.log("not yet");
                        return;
                    }

                    var stop = (STOP_CHOICE) ? STOP_CHOICE : NEAREST_STOPS[0];

                    get_bus_times(stop, populate_bus_table);
                }, 1000
            );
        }
    );
}
