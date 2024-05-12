// パスワード//
 $(document).ready(function () {
   // Password form functionality
   $("#submit-password").click(function () {
     var enteredPassword = $("#password").val();
     var correctPassword = "3131"; // Replace with your actual password

     if (enteredPassword === correctPassword) {
       // Correct password, add class to body
       $(".bodyshow").addClass("show");
       // Hide the password form
       $("#password-form").hide();
       // Clear the password input
       $("#password").val("");
       // Hide the incorrect password message
       $("#password-message").hide();
     } else {
       // Incorrect password, show error message
       $("#password-message").show();
    }
  });
 });

//ドロワーメニュー//
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});
