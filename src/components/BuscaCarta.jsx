
function BuscaCarta(){

    async function getCard(cardName) {
        const url = `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const cardData = await response.json();
            console.log(cardData);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }


    return(
        <>
        
        </>
    )
}

export default BuscaCarta;