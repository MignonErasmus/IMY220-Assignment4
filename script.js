// Mignon Erasmus 35
$(document).ready(function() {
// =========================================================================================================================
  //message for the sake of not copying and pasting code
  function createMessage(mes, color)
  {
    if (mes) //determine whether a message was entered
    {
      //regex to check whether a youtube video is present in the submitted string
      var youtubeLink = mes.match(/(https?:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]+)/);
      if (youtubeLink) //there is embedded link
      {
        //create the div that will contain all the content, text as well as the embedded iframe
        var content =
          $("<div></div>", {
            css: {
              'border-radius': '8px',
              'background-color': color,
              'margin-bottom' : '5px',
              'padding' : '10px',
              'width': '33%',
              'position': 'relative',
              'left': '33%'
            }
          });
          
        content.append(mes.split(youtubeLink[1])[0]); //part of the message before the link

        var url = 'https://www.youtube.com/embed/' + youtubeLink[1].split('v=')[1];

        content.append (
          $("<iframe></iframe>", {
            src: url,
            title: 'YouTube video player',
            frameborder: '0',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            css: {
              'width' : '100%',
              'left': '33%',
              'height' : '315px'
            }
          })
        );

        content.append(mes.split(youtubeLink[1])[1]); //part of the message after the link

        $("div.messages").append(content);
      }
      else //there is no embedded link
      {
        $("div.messages").append (
          $("<div></div>", {
            html: $("#message").val(),
            css: {
              'border-radius': '8px',
              'background-color': color,
              'margin' : '5px',
              'padding' : '5px',
              'width': '33%',
              'position': 'relative',
              'left': '33%'
            }
          })
        );
      }
    }
  }
// =========================================================================================================================
  // when the left button is clicked
  $("#left").on('click', function() {
    var mes = $("#message").val().trim();
    createMessage(mes, 'green');
  });
// =========================================================================================================================
  // when the right button is clicked
  $("#right").on('click', function() {
    var mes = $("#message").val().trim();
    createMessage(mes, 'aqua');
  });
// ========================================================================================================================= 

});
