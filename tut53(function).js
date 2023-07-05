console.log("this is tut - 53 ");

// reusability of code 

function greet(name, greet1)//this are two parameter passes
// function greet(name, greet1="im default greet jr ..khali kahi greet value pass nasti keli tr ...mi print zalo asto ")
{
	console.log(name + " is a good boy" + greet1);
	//here name is a para-meter 
	// we can add more para-meter
	//ata new parameter greet declare kela so 
	// jr to mention nahi kela bakicha names sathi tr te undefined yeil.

	//we can create a variable here with local scope
	name="I'm local variable"
	console.log(name);
	//jr ha baher asta bracket cha error ala asta ti variable already declare

	// console.log(returnVal); it will print undefined coz ha function kahi value return nhi karat
}

// NOTE:- THIS FUNCTION DOES NOT RETURN ANY VALUE

function sum(a,b,c){

	let d = a + b + c;

	return d;
	//this function will return value of sum of d
}

let returnVal = sum(1,2,3);
console.log("Sum of Three number",returnVal);

let name = "Amey";
let greet1 = " and got better package";
let name1 = "tejas";
let name2 = "aniket";
let name3 = "sai";

//calling the function , we call function as many time as we want okay!
greet(name, greet1);
greet(name1);
greet(name2);
greet(name3);


/*console.log(name +" is a good boy");
console.log(name1 +" is a good boy");
console.log(name2 +" is a good boy");
console.log(name3 +" is a good boy");
hai asa parat parat lihawa lagel so function use karto apan*/


// =================================================================================

// 1. pass only those thing which are used in function ,or else it will un optimize
// 2. keep one function for one purpose , 1 function 1 kam ke liye
// 3. keep the function readable
// note:- return ke baadh kuch likha hai toh nhi chalega (it will naver reached by IDE)


// home-work :- min,max greater, less than ka function banav 