$(function () {
    //devour function
    $(".devour").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
    var newDevoured = {
        devoured: 1
    }
    // burgers
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
    }).then(
        function(){
            location.reload();
        }
    )
    })
    //button for burgers
    $("#addBtn").on("click", function (event) {
        event.preventDefault();

        var burgerData = {
            burger_name: $("#burger").val().trim()

        }
        $.ajax("/api/burger", {
            type: "POST",
            data: burgerData
        }).then(
            function () {
                location.reload();
            }
        );
    })
})