$("document").ready(function() {
    $('#rosterContainer').prepend('<button id="addspy">Add Spy</button>');

    $('#addspy').on('click', function() {
        $('#rosterContainer').append('<ol li class="spy" data-threat="caution" <span class="spyname">' + "spyName" + '</span><span class="buttons"><button class = "change">Change</button>' + '<button class="delete">Delete</button></buttons></li>');
    });

    // I suppose I should have appended a form to the DOM, and then turned the form inputs into an object for each spy. But that sounded less daunting than working on the button functionality. Of course, that ended up taking way more time than I wanted it to, and I haven't even gotten the color change to work. :(

    // // Why doesn't this work?
    $('.change').on('click', changeColor());

    //   $('.delete').on('click', removeSpy);  // saving for later


});


function changeColor() {
    if ($(this).parent().parent().data('threat') != "danger") {
        $(this).parent().parent().css('background-color', 'red');
        //trying to set data-threat to "danger"
        $(this).parent().parent().data('threat')("danger");
    } else {
        $(this).parent().parent().css('background-color', 'yellow');
        //trying to set data-threat to "caution"
        $(this).parent().parent().data('threat')("caution");
    }
}


//
// $("#spyContainer").on("click", ".removeSpy", removeSpy);  // can't refer to button yet; it hasn't loaded (removeEmp)
// )

//   When the page loads, create a button on the DOM that says Add Spy. Upon clicking that button, add a new spy to the DOM.
//
// HINT: You 'll need to append a new container onto the DOM.

// What: Each spy will have a unique ID number. The state of the spy can change from cautious (yellow) to danger (red) and vice versa. And, lost spies can be removed from our listing.
//
// How: As a default, the background color of each Spy container should be yellow.
//
// It should also have two buttons
//
// Change button changes the background color to red, if yellow OR yellow, if red.
// Delete button removes the spy container altogether. This button should delete JUST the container that button is in.
// Finally, there should be text that provides a number in the container. The number should be the number of times the Add Spy button has been clicked so far.
