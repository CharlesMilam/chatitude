function ajaxSignup () {
  $("#signupBtn").click(function() {
    console.log("in signup")
    $.ajax({
      type: 'POST',
      url: 'http://chat.api.mks.io/signup',
      data: {
        username: $("#usernameSignup").val(), 
        password: $("#passwordSignup").val()
      }
    }).success(function () {
      console.log("signup success")
    })
  })
};

ajaxSignup();