$(function () {
  var chatsData = [{user:"scruffy", message:"this is a test."}];
  var source = $('#chats-template').html();
  var getChatsTemplate​ = Handlebars.compile(source);

  $('.chatsList').append(getChatsTemplate​(chatsData));
});