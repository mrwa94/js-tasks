
//var
const quote = document.getElementById('quote');
const person = document.getElementById('person');
const btn = document.getElementById('btn');

//quote array 
const quoteArray = [{ quote : `Everything you can imagine is real.` , person :`Pablo Picasso`} ,
                    { quote : `Simplicity is the ultimate sophistication.` , person :`Leonardo da Vinci`} ,
                    { quote : `Whatever you do, do it well.` , person :`Walt Disney`} ,
                    { quote : `Big dreams have small beginnings` , person :`Walt Disney`} ,
                    { quote : `I’m not shy, I just don’t give my energy to everyone.` , person :`Pablo Picasso`} ,

                  ];


  //button 
 btn.addEventListener('click' , function(){
    const randomQuote = Math.floor(Math.random() * quoteArray.length);

    quote.innerText = quoteArray[randomQuote].quote;
    person.innerText = quoteArray[randomQuote].person;
 })   ;             

