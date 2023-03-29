/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// array of seven random quotes
let quotes = [ {
  quotes: `You will face many defeats in life, but never let yourself be defeated.`,
  source: `Maya Angelou`,
  citation: `https://blog.hubspot.com/sales/famous-quotes`,
  year: 2023,
  tags: "Inspirational"
},
{
  quotes: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
  source: `Nelson Mandela"`,
  citation: `https://blog.hubspot.com/sales/famous-quotes`,
  year: 2023,
  tags: "Inspirational"
},
{
  quotes: `In the end, it's not the years in your life that count. It's the life in your years.`,
  source: `Abraham Lincoln"`,
  citation: `https://blog.hubspot.com/sales/famous-quotes`,
  year: 2023,
  tags: "Inspirational"
},
{
  quotes: `I have not failed. I’ve just found 10,000 ways that won’t work.`, 
  source: `Thomas Edison`,
  citation: `https://blackmousedesign.com.au/2014/05/stop-procrastinating/i_have_not_failed_edison/`,
  year: 2023,
  tags: "Humor"
},
{
  quotes: `Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are.`,
  source: `Will Ferrell`,
  citation:  `https://www.rd.com/list/funniest-quotes-all-time/`,
  year: 2023,
  tags: "Humor"
},
{
  quotes: `Behind every great man is a woman rolling her eyes.`,
  source: `Jim Carrey`,
  citation: `https://www.rd.com/list/funniest-quotes-all-time/`,
  year: 2023,
  tags: "Humor"
},
{
  quotes: `I think the saddest people always try their hardest to make people happy. Because they know what it feels like to feel absolutely worthless and they don't want anybody else to feel like that.`,
  source: `Robin Williams`,
  citation: `https://parade.com/993470/stephanieosmanski/robin-williams-quotes/`,
  year: 2023,
  tags: "Motivational"
},
];
//Function to log quotes into console
console.log(quotes)


/***
 * `getRandomQuote` function
***/
//Function to generate the random quotes 
function getRandomQuote (array) {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  for ( i=0; i < randomQuote.length; i++) {
  };

  return quotes[randomQuote];

};

//Funciton to change background color as new quote is generated
const getRandomColor = () => Math.floor(Math.random() * 100);


/***
 * `printQuote` function
***/
//Function to generate random quotes with their properties
function printQuote() {
  var message = "${quotes}";     
  var result = getRandomQuote(quotes);
  if (quotes.citation !== null)
  
  message = "<p class='quote'>" + result.quotes + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + ", " + "</span>";
  message += "<span class='tags'>" + result.tags + "</span>";
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
  document.querySelector('body').style.backgroundColor = `hsl(${getRandomColor()}, 50%, 50%)`;
}
//Function that refreshes the page every 30 seconds with a new quote and background
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);