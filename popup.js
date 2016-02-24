/************ NOTES *************
Bus Colors:
    busch - purple
    c.ave - yellow
    livi - blue
    c/d - green
Names of All Buses:
    a b c ee f h wk1 wk2 all sum1 sum2
**********************************/

/******** Global Vars *******/
var STOP_CHOICE = null;
var NEAREST_STOPS;

/*
 * Returns properly colored HTML Button based on the input bus time
 */
function create_bus_button(bus_time) {
    var button_type = '';
    if (bus_time <= 5) {
        button_type = 'danger';
    }
    if (bus_time > 5 && bus_time <= 10) {
        button_type = 'warning';
    }
    if (bus_time > 10) {
        button_type = 'success';
    }

    return '<button type="button" class="btn btn-' + button_type + '">' + bus_time + ' min</button>';
}

/*
 * Inject current stop into the HTML. (Future version may include a stop picture)
 */
function display_current_stop(current) {
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

/*
 * Injects HTML with a table containing bus times
 */
function display_bus_table(bus_data) {
    var html_body = "";
    var bus_names = Object.keys(bus_data);

    // build html table from bus times
    for(i = 0; i < bus_names.length; i++){
        var name = bus_names[i];
        if (!name) { // Filtering out garbage values...
            continue;
        }

        var times = bus_data[name];

        html_body += '<tr>';

        // add bus name
        html_body += "<td>" + name + "</td>";

        // add bus times
        for(var j = 0; j < 3 && j < times.length; j++) {
            html_body += '<td>' + create_bus_button(times[j]) + '</td>';
        }

        html_body += '</tr>';
    }

    document.getElementById('info_html').innerHTML = html_body;

    return;
}


function refresh_info() {
    var stop = (STOP_CHOICE) ? STOP_CHOICE : NEAREST_STOPS[0];

    display_current_stop(stop);
    get_bus_times(stop, display_bus_table);
}

// Extension main()/controller function essentially.
function start_extension(nearest_stops) {
    NEAREST_STOPS = nearest_stops;

    $(document).ready(
        function() {
            // Init call to retrieve the first refresh.
            refresh_info();

            //load_nearby_stops();

            window.setInterval(refresh_info, 30000);
        }
    );
}

// get the nearby stops and then start the extension
get_nearby_stops(start_extension);
