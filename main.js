
function toggleFormStatusDisplay(action) {
    if (action === 'hide') {
        $('#index-form-status').removeClass('d-flex');
        $('#index-form-status').addClass('d-none');
    } else {
        $('#index-form-status').addClass('d-flex');
        $('#index-form-status').removeClass('d-none');
    }

}

$('input').change((event) => {
    let input = event.target;
    if (input.checkValidity()) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
})



// -------------------- Google Script JS -----------------
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#index-form").submit(function (event) {

    toggleFormStatusDisplay('hide');

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbw3EnqObgQe6KoLL9KtlYD1xu4Fz-WwyBcJ52jhL9DsOZrAESanEWN1ha7fymnSqe8wZw/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR) {
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        $('#index-form-status span').text('Your form has been submitted. Thank You!');
        $('#index-form-status').removeClass('alert-danger');
        $('#index-form-status').addClass('alert-success');
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
        // Log the error to the console
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
        $('#index-form-status span').text('Oops! An error occured!');
        $('#index-form-status').addClass('alert-danger');
        $('#index-form-status').removeClass('alert-success');
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        toggleFormStatusDisplay();
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});