let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// const uri ="https://api.quotable.io/random";

let getQuote =()=>{
   
    fetch('https://programming-quotesapi.vercel.app/api/random')
    .then(response => response.json())
    .then(item => {
        // console.log(item);
        quote.innerText = item.quote;
        author.innerText = item.author;

    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
