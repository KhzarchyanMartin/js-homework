//1
//foreach

/*
function myForEach(arr, callback) {

  for (let i = 0; i < arr.length; i++) {

    callback(arr[i], i, arr);
  }
}


let arr = [];

for (let a = 0; a < 5; a++) {

  let tver = Number(prompt("Mutq Tver: "));

  arr.push(tver);

}





myForEach(arr, function(value, index, arr) {

  console.log(`index: ${index} \n value: ${value}`);
});

*/

//2
//map

/*
let arr = [];

for(let a = 0 ; a < 5 ; a++){

    let num = Number(prompt("Muqt Tveer: "));
    arr.push(num);
}

function MyMap(arr , callback ) {

    let newArr = [];
    for(let a = 0;  a < arr.length ; a++){

        newArr[a] = arr[a];
        newArr[a] *= 2;
        
    }
    return callback(newArr);
    
}

MyMap(arr , function(newArr){

    console.log(`newArr: ${newArr}`);
})
*/

//3
//filter

/*
let arr = [];

for(let a = 0 ; a < 5 ; a++){

      let a = Number(prompt("Mutq Tver: "));
      arr.push(a);
}

function MyFilter(arr , callback) {

        let newArr =  [];

        for(let a = 0 ; a < arr.length ; a++){


             if(arr[a] % 2 === 0){

               
                  newArr[a] = arr[a];
             }
              

        }

        return callback(newArr);
  
}

MyFilter(arr , function(newArr){

        console.log(`${newArr}`);

})
*/

//4
//some

/*
let arr = [];

let len = Number(prompt("Muqtagrel zangvaci qanaky: "));

for(let a = 0 ; a < len ; a++){

  let num = Number(prompt("Muqt Tver:"));

  arr.push(num);

}


function MySome(arr , callback) {

  let bool = false;
    for(let a = 0 ;  a < arr.length ; a++){

          if(arr[a] % 2 === 0) {

               bool = true;
               return callback(bool);

          }

    }

    return callback(bool);

}


MySome(arr , function(bool){

     console.log(`${bool}`);
})
*/


//5
//every

/*
let arr = [];

let len = Number(prompt("Muqtagrel zangvaci qanaky: "));

for(let a = 0 ; a < len ; a++){

  let num = Number(prompt("Muqt Tver:"));

  arr.push(num);

}


function MyEvery(arr , callback) {

  let bool = true;
    for(let a = 0 ;  a < arr.length ; a++){

          if(arr[a] % 2 !== 0){
                  bool = false;
              return callback(bool);    

          }

    }

    return callback(true);
}


MyEvery(arr , function(bool){

     console.log(`${bool}`);
})
*/

//6
//indexof

/*
let arr = [];

let len = Number(prompt("Mutqagrel qanaky: "));

for(let a = 0 ; a < len ;a++){

    let num = Number(prompt("Mutqagrel Tver: "));

    arr.push(num);
}


function Myindexof(arr , callback) {

  let N = Number(prompt("Muqtagrel Gtnvogh tvanshany: "));
        let gtnvec = -1;
      
      for(let a = 0 ;  a < arr.length ; a++){

            if(arr[a] === N){

                return callback(arr[a]);
      
            }
      }
      return callback(gtnvec);
}


Myindexof(arr , function(value){
          console.log(`value: ${value}`);
})

*/



        











