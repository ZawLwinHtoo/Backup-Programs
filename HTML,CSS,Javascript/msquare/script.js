//CASE SENSITIVE

let email = "abcd@gmail.com" ;
const name = "ABCD" ;

//OPERATORS

// ARITHMETIC OPERATORS

// +(Addition)
let str1 = "Hello" ;
let str2 = "World" ;
let str3 = str1 + "" + str2 //(String Concatenation) 

// - (Substracting)
// * (Multiplication)
//  / (Division)
// % (Remainder) 
// ** (Exponent) 

// INCREMENT AND DECREMENT 

// ++ 
let nu1 = 1;
let num2 = num1++ ; // num2= 2

// -- 
let num1 = 1;
let num2 = num1-- ; // num2=0

// ASSIGNMENT OPERATORS 

// = 

// += (Addition assignment)
let num = 1
num +=5 // num = 6

// -= (Substraction assignment)
let num= 10
num -=6  // num = 4 

// *= (Multiplication assignment)
// /= (Division assignment)


// COMPARISON OPERATORS 

// == vs === 
let num = 5 ;
num == "5" ; // output true
num === "5" ; // output false
num === 5 ; // output true 

// != vs !== 
let num = 5 ; 
num != "5" ; // output false
num !== "5" ; // output true 

// >(greater than) and <(last than) 
let num1 = 3 ;
let num2 = 5 ;
num1 > num2 ; // output false
num1 < num2 ; // output true 

// >=(greater than or equal to) and <=(less than or equal to) 
let num1 = 4 ;
let num2 = 6 ;
num1 >= num2 ; // output false
num1 <= num2 ; // output true  

// LOGICAL OPERATORS
let num1 = "5" ;
let num2 = "10" ;

// && (and logical operator)
num1 > 5 && num2 < 15 //false
num1 > 2 && num2 < 11 //true

// || (or logical operator) 
num1 > 3 || num2 < 10  //true
num1 > 7 || num2 < 5   //false
num1 >= 5 || num2 <=10 //true

// !(not logical operator)
!(num1 === num2 ) // true
!(num1 < num2) // false 


// CONDITIONAL STATEMENTS


//if~~else if~~ else
/* if (condition) {
    code to run if condation is true 

} else if (another condidion) {
run some other code if another condidion is true 

} else {
run another code
}  */

const num1 = 2 ;
let num2 = 0 ;

if ( num1==="2 ) {
    num2 += 5 ;
} else if ( num1 >=3) {
    num2 += 10 ;
} else {
    num2 = 200 ;
}

//switch
/* switch () {
    case choice1 :
        //Run this code 
        break; 
    case choice2 :
        //Run this code
        break;
    case choice3 :
        //Run this code
        break;
    default : 
        //Run this code if no case matches
}  */
const num1 = 3 ;
let num2 = 0 ;

switch (num1) {
    case 1 :
        num2 +=3 ;
        break;
    case 2 :
        num2 *=4 ;
        break;
    case 3 :
        num2 +=100 ;
        break;
    default :
        num2 +=1 ;
}

// FUNCTION 
// DRY principle -Dont Repeat Yourself

let num1 = 0;
// function declaration 
// parameter 
function calculator(firstnumber, secondnumber, thirdnumber) {
    // NaN = Not a Number 
    num1 = firstnumber * secondnumber + thirdnumber
    num1 += 4 ;
    num1 /= 2 ;
}

// call the declared function to use it 
calculator (5, 4, 2) ;
// num1 --> 25 --> 29 --> 14.5 

//value returning function 
let num2 = 0 ;
function getnumber (number) {
    return number ;
}
num2 += 10 ;
const mynumber = getnumber(5) ;

// Built in function 
alert("Hello World") ;

// ES6 Arrow Function 
const myarrowfunction = (param1, param2) => {
    param1 * param2 
}

myarrowfunction (2,4) ;

//object 

{} //empty object 
const person1 = {
    name: "Aung Paing" , //key value pair 
    age: 50 ,
    height: 170 ,
    city: "Yangon" ,
    dateOfBirth: 2000 ,
    isActor: true ,
    walk:  () => {
        alert("Aung Paing is walking now......")
    }
}

// Accessing object's property and method 
// 1) dot notation 
person1.name
person1.city
person1.walk () 
// 2) bracket notation
person1["height"]
person1["dateOfBirth"]
person1["walk"]()