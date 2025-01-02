# Quote Generator Using JavaScript API

A dynamic and interactive web application that generates random quotes using an API. Built with HTML, CSS, and JavaScript, this project fetches quotes from a public API and displays them to the user with an elegant design.

## Features

- **Random Quote Generation**: Generates random quotes every time the user clicks a button.
- **API Integration**: Fetches quotes from a public API (e.g., Quotes API).
- **Responsive Design**: The interface is mobile-friendly and looks great on any screen size.
- **Minimal and Elegant UI**: Simple, clean, and user-friendly interface built with HTML and CSS.
  
## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout for a modern, mobile-responsive design.
- **JavaScript**: Fetching and displaying random quotes from an API.
  
## Setup and Installation

1. Clone this repository to your local machine:

   \`\`\`bash
   git clone https://github.com/guru9696/Quote-Generator-Using-JavaScript-API.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd Quote-Generator-Using-JavaScript-API
   \`\`\`

3. Open the \`index.html\` file in your web browser to view the application.
   
   You can also run a local server if you prefer, using a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code.

## Usage

1. Open the \`index.html\` file in a browser.
2. Click the **"Generate Quote"** button to get a random quote.
3. Enjoy a new motivational quote each time!

## File Structure

\`\`\`
Quote-Generator-Using-JavaScript-API/
│
├── index.html          # The main HTML file for the app
├── styles.css          # The CSS file for styling the app
├── script.js           # JavaScript file to fetch and display quotes
└── README.md           # Project documentation
\`\`\`

## Example Code Snippet

The following JavaScript code demonstrates how quotes are fetched from a public API and displayed in the application:

\`\`\`javascript
const quoteButton = document.getElementById('generate-quote');
const quoteText = document.getElementById('quote-text');

quoteButton.addEventListener('click', fetchQuote);

function fetchQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = \`\${data.content} — \${data.author}\`;
    })
    .catch(error => {
      quoteText.innerText = "Failed to fetch a quote. Please try again.";
    });
}
\`\`\`

This example uses the \`quotable.io\` API to get a random quote. The quote is then displayed on the page every time the user clicks the **"Generate Quote"** button.

## Customization

- You can replace the API URL in the \`fetch()\` function with another quote API if desired.
- Modify the \`styles.css\` file to change the design, colors, fonts, or layout according to your preferences.
  
## License

This project is open-source and available under the [MIT License](LICENSE).

