class Players {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
}
}
let player1 = new Players("Player 1");
let player2 = new Players("Player 2");

class Card {
  constructor(suit, rank, value)  {
    this.suit = suit;
    this.rank = rank;
    this.value = value  
  }
}
     var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
     var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
     var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        var players = [[],[]]
        
        function getDeck() {
	        var deck = new Array();

        	for(var suitindex = 0; suitindex < suit.length; suitindex++)	{
	        	for(var valueindex = 0; valueindex < value.length; valueindex++) {
	        		var card = new Card(suit[suitindex], rank[valueindex], value[valueindex])
              deck.push(card);
          
		}
  }

              return deck;
}
alert("Let's play War!");  

        function shuffle(deck) {
          for (var i = 0; i < 1000; i++) {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];
              deck[location1] = deck[location2];
              deck[location2] = tmp;
                }
              }
             
              
    var deck1 = getDeck();
    shuffle(deck1); 
    dealCards(deck1)
    roundOfPlay()
    checkForWinner()
     
function dealCards(deck1) {
        for (var i = 0; i < 26; i++) {
          let popped = deck1.pop()
          player1.cards.push(popped)
          let popped2 = deck1.pop()
          player2.cards.push(popped2)
          }
        }

function roundOfPlay() {
  for(i = 0; i < 26; i++) {
  var card1 = player1.cards.pop();
  var card2 = player2.cards.pop();
  
  alert("Player 1 plays the " + JSON.stringify(card1.value) + " of " + JSON.stringify(card1.suit) + '\n' + " and Player 2 plays the " + JSON.stringify(card2.value) + " of " + JSON.stringify(card2.suit))
  
  if(card1.rank > card2.rank) { //player 1 wins
  player1.score += 1; 
    alert("Player 1 gets the point.");
               }
  else if(card1.rank < card2.rank) {//player 2 wins
    player2.score += 1;
    alert("Player 2 gets the point.");
  }
  else { //tie
    alert("Tie")
  }
              
alert("The scores are:" + '\n' + "Player 1:  " + player1.score + " points" + '\n' + "Player 2: " + player2.score + " points")
}
}

function checkForWinner() {
          if(player1.score > player2.score) {
            alert("Player 1 WINS!")
          }
          else  {
            alert("Player 2 WINS!")
          }
}