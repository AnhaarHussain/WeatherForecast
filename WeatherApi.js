$(document).ready(function() {
   var city1 = "karachi";
   var city2 = "lahore";
   var city3 = "islamabad";
    $("#show").hide();
    $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city1 + "&units=metric" + "&APPID=114a6ef18f233ed45e9fbb652e0a6ce5", 
                type: "GET",
                dataType: "JSON",
                success: function(data) {
                    var widget = show(data);

                    $("#city1").html(widget);

                    $("#myInput").val('');

        
                }
            });
    $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city2 + "&units=metric" + "&APPID=114a6ef18f233ed45e9fbb652e0a6ce5", 
                type: "GET",
                dataType: "JSON",
                success: function(data) {
                    var widget = show(data);

                    $("#city2").html(widget);

                    $("#myInput").val('');
        
                }
            });
    $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city3 + "&units=metric" + "&APPID=114a6ef18f233ed45e9fbb652e0a6ce5", 
                type: "GET",
                dataType: "JSON",
                success: function(data) {
                    var widget = show(data);

                    $("#city3").html(widget);

                    $("#myInput").val('');
        
                }
            });

    $('#btnData').click(function() {
        var city = $("#myInput").val();

        if (city != '') {

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=114a6ef18f233ed45e9fbb652e0a6ce5", 
                type: "GET",
                dataType: "JSON",
                success: function(data) {
                    var widget = show(data);
                    $("#show").show();
                    $("#show").html(widget);

                    $("#myInput").val('');
                    $(".shown-widgets").hide();
        
                }
            });

        } else {
            $("#error").html("Field cannot be empty");
        }

    });

    
});


function show(data) {
    return "<h3 id=whead> Current Weather for " + data.name + ", " + data.sys.country +"</h3>" + 
           "<h3 id = head1> <img src = 'http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +     
           "<h3> <strong> Weather </strong>: "+ data.weather[0].main +"</h3>" + 
           "<h3> <strong> Discription </strong>: "+ data.weather[0].description +"</h3>" +
           "<h3> <strong> Temperature </strong>: "+ data.main.temp + " &#8451" + "</h3>" +
           "<h3> <strong> Min Temperature </strong>: "+ data.main.temp_min  + " &#8451"  + "</h3>" +
           "<h3> <strong> Max Temperature </strong>: "+ data.main.temp_max  + " &#8451"  + "</h3>";
          
}

