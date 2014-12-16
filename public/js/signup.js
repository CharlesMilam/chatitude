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
      // inform user of successful signup, hide and clear inputs.
      alert($("#usernameSignup").val() + " successfully signed up.");
      $(".signupContainer").hide();
      $("#usernameSignup").val('');
      $("#passwordSignup").val('');
    })
  })
};

ajaxSignup();