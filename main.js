$(function  () {
  var chatsData = [{user:"Nike", message:199.00 }, {user:"Loafers", message:59.00 }, {user:"Wing Tip", message:259.00 }];
 //Get the HTML from the template   in the script tag​
  var source = $("#chats-template").html(); 
​
 //Compile the template​
  var template​ = Handlebars.compile(source); 
  $('.chatsList').append(template​(chatsData)); 
​
});