let startGame = document.getElementById("startGame")
let option = document.getElementById("option")
let sum = document.getElementById("sum")
let card = document.getElementById("card")
let newCard = document.getElementById("newCard")
randomCardGenerator = () => {
    randomNo = Math.floor((Math.random() * 13) + 1)
    if(randomNo === 1){
        return 11
    }else if (randomNo > 10) {
        return 10
    }else{
        return randomNo
    }
}

startGame.addEventListener("click", start_Game = () => {
    isAlive = true;
    hasBlackjack = false;
    let card1 =  randomCardGenerator();
    let card2 =  randomCardGenerator();
    cards = [card1, card2]
    card_sum = cards[0] + cards[1]
    renderGame()
})

renderGame = () => {
    card.innerHTML = "Cards: "
    sum.innerHTML = "Sum: " + card_sum
    for(let i = 0; i < cards.length; i++){
        card.innerHTML += " " + cards[i] 
    }
    if(card_sum < 21){
        message = "Do you want to draw a new Card ?"
    }else if(card_sum === 21){
        message = "You got the Blackjack !"
        hasBlackjack = true
    }else{
        message = "You loose."
        isAlive = false
    }
    option.innerHTML = message
}
newCard.addEventListener("click", drawCard = () => {
    if (isAlive === true && hasBlackjack === false) {
        cardN = randomCardGenerator();
        cards.push(cardN)
        card_sum += cardN
        renderGame()
    }
})