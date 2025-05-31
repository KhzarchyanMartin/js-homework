//may 27
//1

/*
function countOfstring(str) {
     let count = 0;

     for(let a = 0 ; a < str.length ; a++){

        count++;
     }

     return count;
      
}

let str = prompt("Mutqagrel bar: ");

let res = countOfstring(str);

console.log(res);
*/

//2

/*
function MyupperCase(str) {

           let Myres = str.toUpperCase();
    
    return Myres;

}

let str = prompt("Mutqagrel bar: ");

let res = MyupperCase(str);

alert(res);
*/

//3
/*
function ResNum(a , b) {
    
    let res = a + b;

    return res;
}


let a1 = prompt("Mutqagrel Tiv: ");
let b1 = prompt("Mutqagrel Tiv: ");
let a = Number(a1);
let b = Number(b1);
let Res = ResNum(a , b);

alert(Res);
*/

//4

/*
function Rev(str) {
    let end = str.length;

    let r = "";
    
    for(let a = end - 1 ; a >= 0 ; a--){

        r += str[a];

        
    }
   return r;

   
}

let str = "Hello";

let res = Rev(str);

alert(res);
*/

//5

/*
let array1 = [1 , 2];
let array2 = [3 , 4];
let newarr = [];

for(let a = 0 ; a < array1.length ; a++){

    newarr.push(array1[a]);
}

for(let a = 0 ; a < array1.length ; a++){

    newarr.push(array2[a]);
}

console.log(newarr);
*/

//6

/*
let str = "Learning JavaScript";

let res = str.includes("Java");

console.log(res);
*/

//7

/*
let numList = [3, 6, 9, 12 ];

let num = prompt("Mutqagrel tiv man galu hamar: ");

let Num = Number(num);

for(let a = 0 ; a < numList.length ; a++){

    if(Num == numList[a]){

        console.log(`dzer tvi indexy ${a}`);
        break;
    }
}
*/

//8

/*
let array = [50 ,75 , 100];

let res = 0;
for(let a = 0 ; a < array.length ; a++){

    res += array[a];
}
console.log(res);
*/


//9


//10
/*
function El(arr) {

    let res = 0;

    for(let a = 0 ; a < size ; a++){

     res += arr[a];
    }

    return res;


}

let arr = []

let size = Number(prompt("Muqtagrel qanaky zangvaci: "));
let a = 0;
while(a < size){

    arr[a] = Number(prompt(`Mutqagrel ${a}-rd indexi tivy: `));
    a++;
}

let reS =El(arr);

alert(reS);
*/

//11

/*
function EvenOrOdd(num) {

     if(num % 2 == 0){
         return "Even";
     }
     return "Odd";
}

let num = Number(prompt("Mutq Tver: "));

let res = EvenOrOdd(num);

alert(res);
*/

