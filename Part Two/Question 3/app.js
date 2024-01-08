const baseURL = 'https://deckofcardsapi.com/api/deck'

async function setup() {
    let $btn = $('button');
    let $cardNames = $('#card-names'); 
    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    $btn.show().on('click', async function() {
        try {
            let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
            let cardName = `${cardData.cards[0].value} of ${cardData.cards[0].suit}`;
            $cardNames.append(`<p>${cardName}</p>`);
            if (cardData.remaining === 0) $btn.remove();
        } catch (error) {
            console.error("Error drawing a card:", error);
        }
    });
}

setup();
