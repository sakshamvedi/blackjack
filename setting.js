
let x = Math.floor(Math.random()*13)
let y = Math.floor(Math.random()*13)

 let cards = [];

let count = document.getElementById("cardcount")
let car = document.getElementById("sum")
let message = document.getElementById("mes")
let val = 1;
function start()
{

  
    if(val===1)
    {
   x =  Math.floor(Math.random()*13)
   cards.push(x);
   count.innerHTML = x
   val = 0;
    }
    
}

let sum  = 0;
let i = 0;
function newc()
{
    x =  Math.floor(Math.random()*13)
   cards.push(x);
   count.innerHTML = x
    sum = sum+cards[i]
   car.innerHTML = sum
    if(sum === 21)
    {
   message.innerHTML = "Yay !! You won ❤️❤️" 
 
    }
    else if(sum<21)
    {
        message.innerHTML = "Get some more cards 💕"

    }
    else if(sum>21)
    {
        message.innerHTML = "Sorry Bhai ! You loose 😔 "
        
    }
   i++;



}