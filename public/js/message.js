function ajaxMessage(){
  $("#messageBtn").click(function() {
    console.log("in click")
    $.ajax({
      type: 'POST',
      url: '',
      data: {
        username: $("#usernameMessage").val(),
        message: $("#message").val(), 
        apiToken: sessionStorage.getItem("apiToken")
      }
      
    }).success(function (token) {
      console.log("message success");
      alert("Message successfully added.");
      $("#message").val('');
    })
  })
}

ajaxMessage();