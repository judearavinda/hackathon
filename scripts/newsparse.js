
  var headline_queue = ["","","","","","",""];
  var headlines = ["Google to pay $140 million in back taxes in Britain","DJ Google Settles UK Tax Dispute","Reuters Insider - First winning week of the year for stocks","Google Strikes Deal With U.K. Tax Authority","Google to pay 130 mln pounds in back taxes in UK - FT","Google will pay 130m in back taxes to HMRC","Google paid Apple $1bn to be default iOS search engine  AAPL.OQ   GOOGL.OQ","Reuters Insider - Small victory for market bulls","Google Strikes Deal With U.K. Tax Authority","Google self-driving cars: Autonomous driving is a way off, new figures show","Search Deal with Apple Shows Google's Mobile Vulnerability","Google pays Apple $1 billion per year to keep its search bar on the iPhone"]
  
  
  for (i = 0; i < headlines.length; i++)
  {
	console.log("wait 5 seconds and grab one headline|");
	console.log(headlines[i]);
	window.setTimeout(append_headlines(headlines[i]),10000);
  }
  
  
  
  function append_headlines(line)
  {
		console.log("append a headline");
	    if (headline_queue.length > 5)
        {
            //remove the first element
            headline_queue.shift()
            headline_queue.push(line)
        }
        else
        {
            headline_queue.push(line)
        }
        updateHeadlines();
  }
  
  function updateHeadlines()
  {
	console.log("headlines updated");
	for (number = 1 ; number < 7;number++) 
		{
			console.log(number);
            var headline = document.getElementById('headline'+ number);
            headline.innerHTML = headline_queue[number-1];
        }
  }