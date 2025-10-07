let remainingIndexes = [...quotes];
const quote = document.getElementById("quote");

function generateQuote() {
  if (remainingIndexes.length === 0) {
    remainingIndexes = [...quotes];
  }

  const randomIdx = Math.floor(Math.random() * remainingIndexes.length);
  quote.innerHTML = quotes[randomIdx];

  remainingIndexes.splice(randomIdx, 1);

  const quoteCard = document.getElementById("card");
  quoteCard.classList.add("show");
}
