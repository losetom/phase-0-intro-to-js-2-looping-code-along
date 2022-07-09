function writeCards(names, giftType) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
    }
    return cards
}

function countDown(times) {
    let countDown = times 
    while (countDown >= 0) {
        console.log(countDown)
        countDown--
    }

}