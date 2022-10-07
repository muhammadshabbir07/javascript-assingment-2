// chapter 21 -30

// Changing Case

// Q1
// var userInput = prompt("Enter your Full Name");

// document.write(userInput.toUpperCase());


// Q2
// var userString = prompt("Enter your Full Name");
// var sentence = userString.toLowerCase().split(" ");

// for(var i = 0; i< sentence.length; i++){
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write(sentence.join(" "));


// Strings: measuring length and extracting parts
// Q1 
// var userMobile = prompt("Tell me your favorite mobile phone model.");
// document.write(userMobile.length);

// Q2
// var userMobile = prompt("Tell me your favorite mobile phone model.");
// document.write("User input Last Charater is: " + userMobile.slice(-1));



// Strings: finding segments

// Q1
// var country = "Pakistani";
// document.write("Index of 'n' is: " + country.indexOf("n"))

// Q2 
// var userName = prompt("Enter your Username: ");

// for (let i = 0; i < userName.length; i++) {
//     const element = userName[i];
//     if (element == "@" || element.toLowerCase == "." || element.toLowerCase == "," || element.toLowerCase == "!"){
//         alert("please enter a valid userName");   
//         userName=prompt("Enter your Username: ");
//     }
//     else{
//         document.write("Your Username is: " + userName)   
//     }
// }


// Q3
// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLocaleLowerCase();
// text = text.split(" ")
// var numCount = "";

// for (let i = 0; i < text.length; i++) {
//     var element = text[i];
//     if (element == "the") {
//         numCount++
//     } else {

//     }    
// }
// document.write(numCount)


// Strings: finding a character at a location
// Q1in complete
// var country = "Pakistani";
// document.write(country.slice(1,2))


// chapters31-34

// DATE METHODS

// Q1
//  var currentDateTime = new Date();

//  document.write(currentDateTime);

// Q2
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentDateTime = new Date();

//  document.write("Current Month: " + monthNames[currentDateTime.getMonth()]);

// Q3
// const currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDateTime = new Date();

// alert("Today is " + currentDay[currentDateTime.getDay()]);

// Q4
// const currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDateTime = new Date();
// var getDay = currentDay[currentDateTime.getDay()];

// if(getDay == "Saturday" || getDay == "Sunday"){
//     document.write("It's Fun day"); 
// }
// else {
//     document.write("It's Working Days"); 
// }

// Q5
// var currentDateTime = new Date();
// var getDate = currentDateTime.getDate();

// if(getDate <= 16){
//    document.write("First fifteen days of the month"); 
// }
// else{
//    document.write("Last days of the month"); 
// }

// Q6
// var currentDateTime = new Date();
// var Todaymilli = currentDateTime.getTime();
// var todayMin = currentDateTime.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);


// document.write("Current Date: " + currentDateTime);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// Q7
// var time = new Date();
// var getTimeFormat = time.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
// var getFormat = getTimeFormat.slice(3)
// var format = "am";

// if(getFormat.toUpperCase() == format.toUpperCase()){
//     document.write("It's " + getFormat);
// }
// else{
//     document.write("It's " + getFormat);
// }

// Q8
// var laterDate = new Date('dec 31 2020');
// document.write("Last Date: " + laterDate);

// Q9
// var ramzanPast = new Date("June 18, 2015");
// ramzanPast = ramzanPast.getTime();
// var ramzanNow = new Date("Saturday 2, April");
// ramzanNow = ramzanNow.getTime();
// var diff = ramzanPast - ramzanNow
// var getDaysDiff = diff / (1000 * 60 * 60 * 24 * 30);

// document.write(getDaysDiff + " Days have past since 1st Ramadan 2015")

// Q10




// chapters 35-38

// FUNCTION

// Q1
// function currentDateTime(){
//     var todayDateTime = new Date();
//     document.write(todayDateTime);
// }
// currentDateTime();

// Q2
// function userWelcome(){
//     var firstName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Your Full Name: " + firstName + " " + lastName);
// }
// userWelcome();

// Q3
// var firstNumber, SecondNumber, addNumbers;
// function userAddds(){
//     firstNumber = +prompt("Enter a First Number: ");
//     SecondNumber = +prompt("Enter a First Number: ");
//     addNumbers = firstNumber + SecondNumber;

    // return addNumbers;
// }
// document.write(userAddds());

// Q4 In complete
// var num1, num2, operator, cal;


// function calculator(num1, num2, operator){
//     num1 = +prompt("Enter a First Number: ");
//     num2 = +prompt("Enter a Second Number: ");
//     operator = +prompt("Enter a Operator: ");

//     cal = num1 + operator + num2
//     console.log(cal);
//     return cal;
// }


// calculator(num1, num2, operator);


// Q5




