document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var quotes = {
      "-Eliud Kipchoge" : '"Only the disciplined ones in life are free. If you are undisciplined, you are a slave to your moods and your passions."',
        "-Dr. Phil" : '"At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it."',
        "-Dwayne “The Rock” Johnson" : '"Wake up determined, go to bed satisfied."'
    };
  
    // grab all the keys in the dictionary (authors) and store in an array
    var authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    var author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    var quote = quotes[author]
    // setTimeout(#generate(),5000)
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  
  }