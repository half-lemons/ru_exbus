function parse_bus_data(bus_data)
{
    var parsed_data = {};

    /* parse bus data */
    for(i = 0; i < bus_data.length; i++)
    {
        var current_bus = bus_data[i];
        if(!current_bus.predictions) // bus isn't running
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
    url = "http://runextbus.heroku.com/stop/" + stop;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data, status){
            if(status === 'error'){
                // should handle this.....
            }

            fn( parse_bus_data(data) );

            return;
        }
    });
}
