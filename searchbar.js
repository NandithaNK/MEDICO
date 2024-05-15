function searchcard() {
  //declaring variables
    var input, filter, cards, cardContainer, title, i;
    // the cardsearch is the id of the div in explore.html
    input = document.getElementById('cardsearch').value;
    // make the input lowecase
    filter = input.toLowerCase();
    // getting all the cards in the div with id= allcards
    cardContainer = document.getElementById('allcards');
    // getting the specific card by the individual cardname
    cards = cardContainer.getElementsByClassName("card");
  
    for (i = 0; i < cards.length; i++) {
      // Retrieve the title of the current card and convert it to lowercase
      title = cards[i].querySelector(".card-title").innerText.toLowerCase();
      
      // Check if the filter text is found in the lowercase title
      if (title.indexOf(filter) > -1) {
        // If the filter text is found, display the current card
        cards[i].style.display = "";
      } else {
        // If the filter text is not found, hide the current card
        cards[i].style.display = "none";
      }
    }
    
  }
  