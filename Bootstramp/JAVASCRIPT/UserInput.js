
// var a,b;
// a = parseInt(prompt("Enter Value of a : "));
// b = parseInt(prompt("Enter Value of b :"));

//var mon = prompt("What is your Favorite Month :");
/*
document.write("Entering switch block<br />");
switch (mon) {
   case "January": document.write("It is the first month of the year. January has 31 days, In the Northern Hemisphere marks the start of winter, while in the Southern the summertime is just beginning.<br />");
   break;

   case "February": document.write("It is the shortest month of the year, and it’s very special! February has 28 days usually, but every 4 years, it has got one more day to end up with 29. This extra day is called leap day. <br />");
   break;

   case "March": document.write("The spring month! At least in the Northern Hemisphere. In the Southern Hemisphere, March marks the start of fall. It has 31 days.<br />");
   break;

   case "April": document.write("April has 30 days. In some places in the Northern Hemisphere, it comes with lots of rain and windy weather.<br />");
   break;

   case "May": document.write("The fifth month of the year, and it has 31 days. May marks the beginning of Winter on the Southern Hemisphere, and it marks the end of Spring, which lasts until June, in the Northern Hemisphere.<br />");
   break;

   case "June": document.write("June has 30 days, and it’s just in the middle of the year! For the people living in the Southern Hemisphere, it comes with cold temperatures, but in the Northern region, it represents the start of summer and sunny days.<br />");
   break;

   case "July": document.write("With 31 days, July is midsummer for the Northern region, and frequently associated with the start of vacations!<br />");
   break;

   case "August": document.write("A cold month for the Southern region that marks the end of their Winter. August has 31 days. In the Northern Hemisphere, it’s time to go to the beach and enjoy the water.<br />");
   break;

   case "September": document.write("It’s the ninth month of the year and the start of Fall in the Northern region. It also represents in many places the start of a new school year. September has 30 days.<br />");
   break;
   
   case "October": document.write(" Leaves start to fall in some places, while days get a bit warmer in others! October is the tenth month of the year, and it has 31 days.<br />");
   break;

   case "November": document.write("In November, the Northern Hemisphere gets colder temperatures each day, while in the other half of the world the temperature keeps rising. It has 30 days and it’s the 11th month of the year.<br />");
   break;

   case "December": document.write("December is the last month of the year. It has 31 days, and it marks the beginning of summer for the Southern Hemisphere, while in the Northern one is the start of wintertime.<br />");
   break;

   default:  document.write("Unknown Month <br />")
}
*/
var name, age, drive, lic;
 name = prompt("Enter your Name :");
 age = parseInt(prompt("Enter your age : "));
 drive = prompt("Are you able to drive :");
 lic = prompt("Do you have Driving License : ");


if(age > 18 && drive == "yes" && lic == "yes"){
    document.write("Hello"," ",name," ","you can drive on road <br/> ");
    document.write("Please Follow Safety Precautions <br/>");
}
else if (age < 18 ){
    document.write("Hello"," ",name," ","you can not drive on road as you are not 18 years Old<br/> ");
}
else if (age > 18 && drive == "no"){
    document.write("Hello"," ",name," ","Please learn to drive first then apply for Driving License so you can drive on road <br/> ");
}

else if (age > 18 && drive == "yes" && lic == "no"){
    document.write("Hello"," ",name," ","Please  apply for Driving License so you can drive on road <br/> ")
}
else{
    document.write("Hello"," ",name," ","Have a nice day<br/> ")
}