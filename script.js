function Initialize() {
  flipCount = 0;
  attCount = 0;
  corCount = 0;
  cardArr = ["url(PlayingCards/JC.png)", "url(PlayingCards/JC.png)", "url(PlayingCards/JD.png)", "url(PlayingCards/JD.png)", "url(PlayingCards/JH.png)", "url(PlayingCards/JH.png)", "url(PlayingCards/JS.png)", "url(PlayingCards/JS.png)", "url(PlayingCards/KC.png)", "url(PlayingCards/KC.png)", "url(PlayingCards/KD.png)", "url(PlayingCards/KD.png)", "url(PlayingCards/QD.png)", "url(PlayingCards/QD.png)", "url(PlayingCards/QS.png)", "url(PlayingCards/QS.png)"];
  Shuffle(cardArr);
  console.log(cardArr)
}

function Shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function Flip(index) {
  flipCount++;
  document.getElementById(index).style.backgroundImage = cardArr[index];
  console.log("Flipped card " + index + " to show image " + cardArr[index]);
  console.log(flipCount);
  if (flipCount % 2 == 1) {
    cardOne = index;
  }
  if (flipCount % 2 == 0) {
    cardTwo = index;
    setTimeout(FlipCheck, 1000, cardOne, cardTwo);
  }
}

function FlipCheck(one, two) {
  attCount++;
  console.log(one + " and " + two);
  if ((cardArr[one] != cardArr[two]) || (one == two)) {
    document.getElementById(one).style.backgroundImage = "url(backSide.png)";
    document.getElementById(two).style.backgroundImage = "url(backSide.png)";
  }
  else {
    corCount++;
    if (corCount == 8) {
      document.getElementById('winner').textContent = "Congrats! You matched all the cards in " + attCount + " attempts!";
    }
  }

  document.getElementById('counter').textContent = "Attempts: " + attCount;
}

function Reset() {
  console.log("Reset")
  for (i = 0; i < cardArr.length; i++) {
    document.getElementById(i).style.backgroundImage = "url(backSide.png)";
  }
  Initialize();
}


/*
1. Added alt text for the buttons and added text
2. Altered the headers so they would be more informative
3. Changed the color scheme to a calmer blue and gray
4. Changed the link names to be more informative
5. Used gridbox and flexboxes to make the page more dynamic
*/
