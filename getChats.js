$(document).ready(function() {
    setInterval("ajaxget()", 15000);
});

function ajaxget() {
  $.ajax({
      type: 'GET',
      url: 'http://chat.api.mks.io/chats'
    }).success(function (chats) {
      console.log("Got chats:", chats)
      chatsData = chats;
      var source = $('#chats-template').html();
      var chatsTemplate = Handlebars.compile(source);

      $('.chatsList').children().remove();
      $('.chatsList').append(chatsTemplate(chatsData));
    })

}

ajaxget(); 
