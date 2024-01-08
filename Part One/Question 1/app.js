let baseURL = "http://numbersapi.com";

async function part1(favNumber) {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  // Display the result in the resultContainer
  $('#resultContainer').html(`<p>${data.text}</p>`);
}

// Attach a submit event handler to the form
$('#numberForm').submit(function(event) {
  // Prevent the default form submission
  event.preventDefault();
  // Get the entered favorite number
  let favNumber = $('#favNumberInput').val();
  // Call part1 function with the entered favorite number
  part1(favNumber);
});