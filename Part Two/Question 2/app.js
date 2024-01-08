$(function() {
    let api = {
        baseURL: 'https://deckofcardsapi.com/api/deck',
    };

    async function part2() {
        try {
            let firstCardData = await $.getJSON(`${api.baseURL}/new/draw/`);
            let deckId = firstCardData.deck_id;
            let secondCardData = await $.getJSON(`${api.baseURL}/${deckId}/draw/`);
            
            let cards = [firstCardData, secondCardData].map(cardData => {
                let { suit, value } = cardData.cards[0];
                return `${value.toLowerCase()} of ${suit.toLowerCase()}`;
            });

            return cards.join(', ');
        } catch (error) {
            console.error("Error occurred:", error);
            return "Error drawing cards.";
        }
    }

    $('#drawTwoCardsButton').on('click', async function() {
        // Call the part2 function when the button is clicked
        let cards = await part2();

        // Display the card names in the div
        $('#cardResults').text(cards);
    });

});
