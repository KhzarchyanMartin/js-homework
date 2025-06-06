//1

/*
let butto = document.querySelector('.but')

butto.addEventListener('click' , function() {


    let a = prompt("Mutqagrel text");

    butto.innerHTML = a;
    

});
*/

//2

/*
 let P = document.getElementById('pi');

 P.innerHTML = "Hello Javascript";
*/
//3

/*
 let Inp = document.querySelector('.inp');
 let divv = document.querySelector('.Div');

 Inp.addEventListener('input'  , function() {

     divv.textContent = Inp.value

 });
 */

 //4

 /*

 let p = document.querySelector('p');
 let button = document.querySelector('button');

 button.addEventListener('click' , function() {

    p.style.display = 'none';

 });

 */

 //5

/*
 let div = document.querySelector('div');

 let col  = prompt("Mutqagrel angelrenov guynn vor uzum eq ogtagorcel: ");

 function ReCol(){

     
     div.style.backgroundColor = col;

 }
     */

//  6

/*
let buttons = document.querySelectorAll('.l');
let display = document.getElementById('display');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let val = buttons[i].innerText.trim(); 

    if (val === '=') {
      display.innerText = eval(display.innerText);  
    } else if (val === 'C') {
      display.innerText = ''; 
    } else {
      display.innerText += val;  
    }
  });
}
  */

//7
/*
let time = document.querySelector('.time');
let play = document.querySelector('.play');


play.addEventListener('click' , function () {

    let val = parseInt(time.innerText);
    
    let timer = setInterval(function () {
         if(val > 0){

              val--;

               time.innerText = val;
         }
         else{  
                clearInterval(timer)

         }


    }, 1000)
    
});
*/