// var youLikeMeat = true;
// var myNum = 10;

// if (myNum==9){

//     document.write("Here is the Meat Menu...");
// }else{
//     document.write("Here is the the Veg Menu")
// }

// If, else if, and else statements*************************************************
// var myAge = 19;

// if (myAge > 26){
//     document.write("You are getting Old");

// } else if( myAge > 18){
//     document.write("You are still young");

// } else {
//     document.write("You are still a child");   
// }

// and or if statement   ****************************************************************
// var myAge = 46;

// if (myAge > 18 && myAge  <=30){
//     document.write("You qualify to go on Holiday");

// } else if( myAge <18 || myAge < 50){
//     document.write("You are almost old enough");

// } else {
//     document.write("Go to bed you are tooo old");   
// }

// while loop **************************************************************************************
// var age = 5;

// while(age<10){

//     console.log("You are less than 10")
//     age++
// }
// document.write("You are over 10")

// for loop ***************************************************************************************

// var links = document.getElementsByTagName("a")

// for(i = 0; i < links.length; i++){ 

//      links[i].className = "Link-" + i;
// }     
// Get Average*************************************************************************************
// function getAverage (a,b,c){
//      var average = (a+b+c) / 2;
//     console.log(average);

// }
// getAverage(7,12,15);

// Get Average more/ complex **************************************************************************

// function getAverage (a,b){

//      var average = (a+b) / 2;
//      console.log(average);
//      return average;

// }

// var myResult = getAverage(7,8);
// console.log("The avg is " + myResult);

// mySecondResult = getAverage(5,8);
// console.log("The second avg is " + myResult);

// myResult = console.log("sdfv");

// Functions*****************************************************************************************
// ******************************************************************************************************

// function getAverage (a,b){

//     var average = (a+b) / 2;
//     console.log(average);
//     return average;
// }

// function logResult(){

//     console.log("This a test " + myResult + " test");
// }




// // ****************************************************************************************************

// myResult = getAverage(7,8);
// console.log("The avg is " + myResult);
 
// mySecondResult = getAverage(5,8);
// console.log("The second avg is " + myResult);

// // var myResult = console.log("sdfv");


// myResult = getAverage(7,8);
// console.log("The avg is " + myResult);
 
// mySecondResult = getAverage(5,8);
// console.log("The second avg is " + myResult);

// logResult();
// // Determine the number
// console.log(typeof(myResult));
// // Afrond*********************************************************************************
// console.log(Math.round(7.8));
// // Afrond na laagste getal****************************************************************
// console.log(Math.floor(7.8));
// // Opronding*******************************************************************************
// console.log(Math.floor(7.8));
// // Gee die Grootste getal******************************************************************
// console.log(Math.max(7,8));

// // a = "blah";
// a = 2;
// b = 5;
// if (isNaN(a)){
//     console.log("Not a number");
// } else{
//     number = a * b; 
//     console.log(number);   
// } 
// number = a*b

// var myString = " I\'m a String";           
// console.log(myString.toUpperCase());       // Convert to uppercase
// console.log(myString.toLocaleLowerCase()); // convrt to lowercase
// console.log(myString.indexOf("a"));        //where is a

// if (myString.indexOf("a") ===-1){      
//    console.log("String not found");      //if statement if string not found
// } else{
//      console.log("The string above is found");
// }

// value = 9<2;
// value2 = 'ABC';
// Value3 = 'abc';

// console.log(value);

// console.log(value2.toLocaleLowerCase === Value3.toLocaleLowerCase);

// sliceString = "I, am, about, to, be, sliced";

// // Sliceong a string
// sliceString2 = sliceString.slice(14,26);
// sliceString2 = sliceString.split(",");
// console.log(sliceString2);


// // // Array1[0] = "I";
// // Array1[1] = "am";
// // Array1[2] = 1 ;
// // Array1[3] = true;
// // Array1[4] = "Array";

// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";

// // var myCar = new object();
// myCar = Array;
// myCar.speed = 50;
// myCar.driver = "Dean";
// myCar.drive = function(){
//       console.log("Now driving");};
// myCar.drive();

// console.log(myCar.driver);
//*********************************************************************** */
// var myCar2 = {

//     maxSpeed: 70,
//     driver: "Ninja",
//     drive: function(speed, time){
//         console.log(speed * time);
//     },
//     logDriver: function(){
//         console.log("myCar2.maxSpeed" + this.driver);
//         myCar2.drive(50, 30);
//     }
// };
// ************************************************************************************
// Construction function video 30

// var Car = function(maxSpeed, driver){
//     this.maxSpeed = maxSpeed;
//     this.driver = driver;
//     this.drive = function(speed,time){
//         console.log("myCar2.maxSpeed" + this.driver);
//     };

// }

// myCar = mew Car(70,"Dean");
// // console.log(myCar.drive(30,5))
// myCar.drive(30,5);
// *************************************************************************************

// myDate = new Date();
// myPastDate = new Date(1545,11, 2);
// myFutureDate = new Date(2545, 0, 31,10, 30, 15);
// console.log(myDate);
// console.log(myPastDate);
// console.log(myFutureDate);


// *********************************************************************************************** 

// Traversing DOm

// document.getElementsByClassName("MyList");

// var ListSettings = document.getElementsByClassName("MyList");

// par = document.getElementsByTagName("p");

// var par1 = par.GetElementByTagName("p"); //not working

// MyBody = document.getElementsByTagName("body");
// ***************************************************************************************************

// Text = document.getElementById("Heading");
// myTitle.textContent

// ****************************************************************************************************

// var newLi = document.createElement("li");
// // var newA = document.createElement("a");
// var newA = document.createElement("a");
// var Menu = document.getElementById("MyList").getElementsByTagName("ul")[0];
// ***********************************************************************************************************

// var title = document.getElementById("Heading");
// title.onclick = function(){

//     alert("You clicked me");
// };

// title.onmouseover = function(){

//     alert("You hover overed me");
// };

// **************************************************************************************************

var Content = document.getElementById("Content");
var Button = document.getElementById("ShowMore");

Button.onclick = function(){

  if(Content.className == "open"){
      Content.className =""; 
      Button.innerHTML = "show less";
    
      //expand the box
  } else{
    Content.className == "open"; 
    Button.innerHTML = "show less";
  }
  };