$(document).ready(function(){
    var topics = ['spiderman-meme', 'minecraft-creeper', 'thanos', 'explosions', 'beerus', 'dragonballz', 'super saiyan'];

    function buttonExpress(){
        $('#buttonsView').empty();
        
        for ( var i=0; i < topics.length; i++) {
            var x = $('<button>');
            x.addClass('expression');
            x.attr('data-name', topics[i]);
            x.text(topics[i]);
            $('#buttonsView').append(x);
        }
    }    
    buttonExpress();
   
  $(document).on('click', '.expression', function() {
    var craft = $(this).html(); 
    console.log(craft);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + craft + "&api_key=tOPiBguzq4Fx46PDw6EPyAELdILodTnX";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {

            var results = response.data;
            $('#expressView').empty();
                for ( var j=0; j < results.length; j++) {
                    var imageDiv = $('<div>');
                    var imageView = results[j].images.fixed_height.url;
                    var still = results[j].images.fixed_height_still.url;
                    var expressImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
                    expressImage.attr('data-state', 'still');
                    $('#expressView').prepend(expressImage);
                    expressImage.on('click', playGif);
                        var rating = results[j].rating;
                        var displayRated= $('<p>').text("Rating: " + rating);
                        $('#expressView').prepend(displayRated);
                }
        });

        function playGif() { 
                    var state = $(this).attr('data-state');
                    console.log(state);
                 if ( state == 'still'){
                     $(this).attr('src', $(this).data('animate'));
                     $(this).attr('data-state', 'animate');
                 } else {
                     $(this).attr('src', $(this).data('still'));
                     $(this).attr('data-state', 'still');
            }
        }
    })

$(document).on('click', '#addExpress', function(){
    if ($('#express-input').val().trim() == ''){
      alert('please add block');
   }
   else {
    var car = $('#express-input').val().trim();
    topics.push(craft);
    $('#express-input').val('');
    buttonExpress();
    return false;
    }
});
});