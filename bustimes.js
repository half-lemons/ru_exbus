// global vars
var BASE_URL = "http://runextbus.heroku.com/stop/";

function parse_bus_data(bus_data, fn)
{
    var parsed_data = {};

    /* iterate through buses */
    for(i = 0; i < bus_data.length; i++)
    {
        var current_bus = bus_data[i];

        //that bus isn't running
        if(!current_bus.predictions)
        {
            continue;
        }

        // get times for current bus
        parsed_data[current_bus.title] = [];

        for(j = 0; j < current_bus.predictions.length; j++)
        {
            parsed_data[current_bus.title].push(current_bus.predictions[j].minutes);
        }
    }

    return parsed_data;
}

function get_bus_times(stop, fn)
{
    var xhr = new XMLHttpRequest();

    xhr.open("GET", BASE_URL + stop, true);

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4)
        {
            fn( parse_bus_data(jQuery.parseJSON(xhr.responseText)) );
            return;
        }
    }

    xhr.send();
}
