$(function() {
    $(".change-devoured").on("click", function(event) 
    {
        var id = $(this).data("id");
        var newStatus = $(this).data("1");

        var newDevouredState = 
        {
            devoured: newStatus
        };
  
      $.ajax("/api/burger/" + id, 
      {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() 
        {
            location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) 
    {
        event.preventDefault();
  
        var newBurger = 
        {
            burger_name: $("#name").val().trim(),
            devoured: 0
        };
  
      $.ajax("/api/burger", 
      {
        type: "POST",
        data: newBurger
      }).then(
        function() 
        {
            location.reload();
        }
      );
    });
  });
  