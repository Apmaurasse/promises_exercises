const baseURL = "http://numbersapi.com";

    async function part2(favNumbers) {
      // Map each number to a Promise that resolves with the API response
      let promises = favNumbers.map(favNumber => $.getJSON(`${baseURL}/${favNumber}?json`));

      try {
        // Wait for all promises to resolve
        let responses = await Promise.all(promises);

        // Display the responses in the resultContainer
        responses.forEach(response => {
          $('#resultContainer').append(`<p>${response.text}</p>`);
        });
      } catch (error) {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      }
    }

    // Attach a submit event handler to the form
    $('#numbersForm').submit(function(event) {
      // Prevent the default form submission
      event.preventDefault();
      // Get the entered favorite numbers as an array
      let favNumbers = $('#favNumbersInput').val().split(',').map(num => parseInt(num.trim()));
      // Clear the resultContainer before displaying new results
      $('#resultContainer').html('');
      // Call part2 function with the array of favorite numbers
      part2(favNumbers);
    });