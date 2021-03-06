$(function() {

  // Add a new burger.
  $("#addburger").on("click", function(event) {
      event.preventDefault();

      var newBurger = {
          burger_name: $("#newburger").val().trim(),
          devoured: 0
      };
      console.log(newBurger)
      // Send the POST request.
      $.ajax("api/burgers/create", {
          type: "POST",
          data: newBurger
      }).then(function() {
          console.log("Added new burger");
          // Reload the page to get the updated burger list.
          location.reload();
      });
  });
  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function() {
        console.log("Burger devoured");
        location.reload();
    });
});

$(".trashburger").on("click", function(event) {
    console.log("click")
  event.preventDefault();

  var id = $(this).data("id");

  console.log(id)

  // Send the DELETE request.
  $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
  }).then(location.reload());
});

})
