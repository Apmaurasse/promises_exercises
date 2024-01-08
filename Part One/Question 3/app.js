const baseURL = "http://numbersapi.com";

    async function part3(favNumber) {
      // Use Promise.all to make four asynchronous requests in parallel
      let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
      );

      // Display the responses in the resultContainer
      facts.forEach(data => {
        $('#resultContainer').append(`<p>${data.text}</p>`);
      });
    }

    // Attach a submit event handler to the form
    $('#numberForm').submit(function(event) {
      // Prevent the default form submission
      event.preventDefault();
      // Get the entered favorite number
      let favNumber = $('#favNumberInput').val();
      // Clear the resultContainer before displaying new results
      $('#resultContainer').html('');
      // Call part3 function with the entered favorite number
      part3(favNumber);
    });