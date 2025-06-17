//1

/*
let person1 = {

    name: "Jack",
    age: 25,
    job: "programming"
}

let person2 = {

    name: "Johnson",
    age: 27,
    job: "programming",
    
}


let mergedPerson = Object.assign(person1 , person2);

console.log(mergedPerson);
*/

//2

/*
function deepClone(Person) {
 
      return  structuredClone(Person)   
}

let Person = {

    name: "Bob",
    age: 23,
    job: "Meneger",
    status:"Married",
    address:{
            city: "Erevan",
            city_number: 374
    }
}

let cln = deepClone(Person);

cln.address.city = "Gyumri";
console.log(Person , cln);
*/

//3

/*
let student ={

    name: "William",
    age: 17,
    grates:{

            math: 7,
            english: 9,
            fizkultura:10
    },
    city: "Las Vegas"
}

 Object.freeze(student);

 student.name = "Loris";

 student.age = 23;

 student.grates.math = 9;

 student.city = "Paris";

 console.log(student);
 */

 //4

 /*
let anun = prompt("Mutqagrel dzer anuny: ");
let tariq = Number(prompt(`Mutqagrel dzer tariqy ${anun}-jan : `));
let tvanshan = Number(prompt("Mutqagrel dzer tvanshany:"));

 let student = {

     name: anun,
     age: tariq,
     grade: tvanshan
}



alert(`Student: ${student.name}, ${student.age} tarekan, tvanshan: ${student.grade}`);
*/

//5

/*
let anun = prompt("Mutqagrel dzer anuny: ");
let tariq = Number(prompt(`Mutqagrel dzer tariqy ${anun}-jan : `));

let person = {

    name: anun,
    age: tariq,

    
} 

let pr = prompt("Duq ashxatanq uneq nsheq y or n");


if(pr === 'y'){
    let jobname = prompt("Ashkhatanqi anun:");
    person.job = jobname;
}


console.log(person);
*/

//6

/*
let person = {

    name: "David",
    age: 24,

    greet: function() {

    console.log(`My name is ${this.name}`);

    }
}


let student = Object.create(person);

student.name = "Felix";
student.age = 19;

student.greet = function (){

    consaole.log(`My name is ${this.name}`);
}

student.masnagitutyun = "Cragravorogh";

console.log(student , person);
*/

//7

/*
class Person{

    constructor(name ,age){

        this.name = name;
        this.age = age;
        
    }

}


class Student extends Person{

    constructor(name , age, grade ){
        super(name, age);
        this.grade = grade;
    }

}


let s = new Student("Johnson" , 24 , 8 );

console.log(s instanceof Person);
console.log(s instanceof Student);
console.log(`anun:${s.name} \n tariq: ${s.age} \n  tvanshan:${s.grade}`);
*/

//8

/*
class car{

    constructor(model , year , cost ){

        this.model = model;
        this.year = year;
        this.cost = cost;

    }
}


let mycar = new car("kiaforte" , 2015 , 20000);

car.prototype.getDescription = function() {
    
    return  `${this.model}  ${this.year}  ${this.cost}`;

}

console.log(mycar);
*/

//9

/*
let grades = {

  math: 95,
  physics: 88,
  chemistry: 91,
  fizkult: 98

};

for (let key of Object.keys(grades)) {

  console.log(`${key} - ${grades[key]}`);

}
*/

//10

/*
let products = {
  apple: 100,
  banana: 50,
  orange: 75,
  mango: 120
};

let filteredEntries = Object.entries(products).filter(([key, value]) => value > 70);

let filteredProducts = Object.fromEntries(filteredEntries);

console.log(filteredProducts);
*/


//11

/*
function shallomerge(obj1 ,obj2) {
    
    let newobj = {...obj1 , ...obj2};
    newobj.name = "Aharon"
    return newobj;
}

let person1 = {

    name: "Hamlet",
    age: 23,

}

let person2 = {

    name: "John",
    age: 17,
    proffesia: "programist"

}

let res = shallomerge(person1 , person2);
console.log(res);
*/

//12

/*
function isequal(obj1 , obj2) {

        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if(keys1.length !== keys2.length){
                return false;
        }

        for (const key in keys1) {
            if (obj1[key] !== obj2[key]) {
                    return false;
            }
        }

        return true;
}

let obj1 = {

    name: "Martin",
    age: 19,

}

obj2 = Object.assign( obj1);

obj2.name = "Brdo";

let res = isequal(obj1 , obj2)

console.log(res);
*/

//13

/*
function countProperties(obj1) {    

        let keys1 = Object.keys(obj1);

        let count = 0;
        for (const key in keys1) {
                count++;
        }

        return count;
}


let person = {

        name: "Vardan",
        age: 15,
        professia: "xoharar"
}
 


let person1 = Object.create(person);

person1.status = "Married";
person1.name = "Aharon";
person1.age = 30;
person1.surname = "Vardanyan";
let res = countProperties(person1);

console.log(res);
*/

//14

/*
function addMethod(obj, methodName) {

  obj[methodName] = function () {

    return `Method "${methodName}" called`;

  };
}


let myObject = {};

addMethod(myObject, "greet");

addMethod(myObject, "sayBye");

console.log(myObject.greet());

console.log(myObject.sayBye()); 
*/

//15

/*
let student = {

    name_sur: {
        name:"Vahan",
        surname:"Vanyan"
    },
    age: 19,
    phone_number:{
            AM: 374,
            Number: 996012
    } ,
    country:{
        city: "Erevan",
        locate: 1245644,
        taghamas: "Arabkir"
    },
    clas:{
         name: "WebJs",
         num_ofclass: 2
    }
}


let {
    name_sur: { name, surname },
    phone_number: { AM },
    country: { city },
    age,
    clas 
} = student;

console.log(name);      
console.log(surname);   
console.log(AM);        
console.log(city);      
console.log(age);       
console.log(classInfo); 
*/

//16

/*
let person = {

    name: "Eghishe",
    age: 27
}

let {

    name,
    age,
    country = "Tbilisi",
    surname = "Tumanyan"

} = person

console.log(person);
console.log("Anun:" + name);
console.log("Tariq:" + age);
console.log("Erkir:" + country);
console.log("Azganun: "+ surname);
*/

//17

/*
function Res({name , age , surname , ...rest}) {
    
            console.log("Anun" + " " + name);
            console.log("tariq" + " " + age);
            console.log("Azganun" + " " + surname);
             console.log("Other" + " " +  JSON.stringify(rest));
}

let obj1 = {

    name: "Bryan",
    age: 65,
    surname: "Smith",
    country: "Belgia",
    job: "Not found",
    status: "Married",
    number: 236790
}

Res(obj1);
*/

//18

/*
function arrayUpper(obj1) {
  return Object.values(obj1).map(val =>
    typeof val === "string" ? val.toUpperCase() : val
  );
}


let obj1 = {

    name:"Karen",
    surname: "Karagyozyan",
    job: "teacher",
    age: 15

}

let res = arrayUpper(obj1);

console.log(res);
*/

//19

/*
let obj1 = {

    name:"Elya",
    age: 17,
    student:"Yes" 
}

let str = JSON.stringify(obj1);

console.log(str);

let obj = JSON.parse(str);

console.log(obj1);
*/

//20

/*
function Num(obj1) {
    
        let values = Object.values(obj1);

        for (const val of values) {
            if(typeof val === "number" ){
                 console.log(val)
            }
        }
}

let person = {

    name: "Grdo",
    age: 25,
    number: 1234,
    country_num: 374,
    surname: "Babayan",
    kg: 78
}

Num(person);
*/
