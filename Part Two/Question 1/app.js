$(function() {
    let api = {
        baseURL: 'https://deckofcardsapi.com/api/deck',
    };

    async function part1() {
        try {
            let data = await $.getJSON(`${api.baseURL}/new/draw/`);
            let { suit, value } = data.cards[0];
            return `${value.toLowerCase()} of ${suit.toLowerCase()}`;
        } catch (error) {
            console.error("Error occurred:", error);
            return "Error drawing a card.";
        }
    }

    $('#drawCardButton').on('click', async function() {
        // Call the part1 function when the button is clicked
        let cardName = await part1();

        // Display the card name in the div
        $('#cardDisplay').text(cardName);
    });
});
