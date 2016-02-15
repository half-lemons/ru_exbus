// Global variables.
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

// Color codes the bus times.
function color_code(bus_time) {
    if (bus_time <= 5) {
        return '<button type="button" class="btn btn-danger">';
    }
    if (bus_time > 5 && bus_time <= 10) {
        return '<button type="button" class="btn btn-warning">';
    }
    if (bus_time > 10) {
        return '<button type="button" class="btn btn-success">';
    }
}

// Plugs the current stop into the HTML.
    // Possible future use might be to have this also deal with all the stop pictures as well.

function curr_stop(current) {
    var title = "";

    title += '<p>'+current+'</p>';
    return document.getElementById('curr_stop').innerHTML = title;
}

function dyna_icon(){

}

// Populates dropdown box with options for nearby stops.
function load_nearby_stops(near_list) {
    for(i = 0; i < near_list.length; i++){

    }
}

// Populates dropdown box with options for all stops.
function load_all_stops(all_list){
    for(i = 0; i < all_list.length; i++){

    }
}

// Populates the table and plugs into the HTML.
function populate_bus_table(bus_data) {
    body = "";
    var bus_names = Object.keys(bus_data);

    for(i = 0; i < bus_names.length; i++){
        var name = bus_names[i];
        body += '<tr>';

        // Filtering out garbage values...
        if (name == "null") {
            continue;
        }

        var time = bus_data[name];
        body += "<td>" + name + "</td>";
        
        for(var j = 0; j < 3; j++) {
            body += "<td>" + color_code(time[j]) + time[j] + ' min' + '</button></td>';
        }
        
        body += '</tr>';
    }

    document.getElementById('info_html').innerHTML = body;
    return;
}


function refresh_info() {
    // havent gotten stops yet
    if (!NEAREST_STOPS) {
        console.log("not yet");
        return;
    }

    var stop = (STOP_CHOICE) ? STOP_CHOICE : NEAREST_STOPS[0];

    curr_stop(NEAREST_STOPS[0]);
    get_bus_times(stop, populate_bus_table);
}

// Extension main()/controller function essentially.
function start_extension(nearest_stops) {
    NEAREST_STOPS = nearest_stops;

    $(document).ready(
        function() {
            // Init call to retrieve the first refresh.
            refresh_info();
            
            //load_nearby_stops();

            window.setInterval(
                refresh_info, 30000);        
        });
}