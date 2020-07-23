
/*

Chapter Number 001


TASK 001
alert ("Welcome To Website");

TASK 002
alert ("Java Script Alert \n \n" + "Error ! Please Enter a valid Password");

TASK 003
alert ("Java Script Alert \n \n" + "Welcome To JS Land \n Happy Coding");

TASK 004
alert ("Java Script Alert \n \n" + "Welcome To JS Land");
alert ("Java Script Alert \n \n" + "Happy Coding");

Task 005
console.log("Hello I can run js through my console ");

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

Chapter Number 002

Task 001
var username  = "Muhammad";

Task 002
var myname = " Mukthayar";

Task 003
var message = "Hello World"
alert (message);

Task 004
var user_age = "15";
alert (username+ myname);
alert (user_age + "Years Old");
alert ("Web and mobile appliction course");

Task 005
var x = "pizza";

for( var a = 0 ; a < x.length ; a++){
	for (var j =0; j< a ; j++){
		
 document.write(x)	
	}
	document.write("</br>")
    }

Task 006
var mail = "khanadil1000s@gmail.com";
alert (mail);

Task 008
var book = " A smarter way to learn JavaScript";
alert (book);

Task 009
document.write("yes i can write through java script ");

Task 10
var design = "ஜ۩۞۩ஜ";
alert(design);


--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

Chapter Number 003

Task 001
var age = 15 ;
alert ("I am " + age + " Years Old");

Task 002
var birth = 2000;
document.write("My date of birth is " + birth + "<br>");
document.write("Data type of birth is " + typeof birth)

Task 003
var name = prompt("Enter Your Full Name" ,"John Doe"); 
var product = prompt("Product Title" ,"T-shirt"); 
var qty = prompt("Quantity" ,"5"); 
document.write(name + " order " + qty + product + " from xyz store");


--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

Chapter Number 004

Task 001
var k = ["ali","hamza","mukthayar"];

Task 002
document.write("<h3>Rules for naming JS variables</h3>");
document.write("Variable names can only contain name, letter, underscores and number.");
document.write("Variables must begin with a alphabet, underscores or dollar sign .");
document.write("Variable names are case-sensitive.");
document.write("Variable names should not be JS function name.");

--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------
Chapter Number 005

Task 001
var val1 =prompt("enter value 1")
var val2 =prompt("enter value 2")
var add =Number(val1) + Number(val2);

Task 002 and 003
var multi =Number(val1) * Number(val2);
var substract =Number(val1) - Number(val2);
var rem =Number(val1) % Number(val2);
document.write("Addiation Is " + add + "<br>");
document.write("Multiplication Is " + multi + "<br>");
document.write("Substraction Is " + substract + "<br>");
document.write("Reminder Is " + rem + "<br>");

Task 004
var ticket = 600 ;
var num_tikct = prompt("Enter Number qty of ticket");
var total_price = ticket * num_tikct;
document.write("The Cost of buying " + num_tikct+ " is " + total_price  );

Task 005
for(var a = 1 ; a <= 10 ; a++){
document.write("2 x " + a  +" = " + a * 2 + "<br>" );
}

Task 006
var c = 27;
var f = 80;
var celcius = ( f -32 ) * 5/9;
var ferhhite = (c * 5/9) + 32
document.write(c + " celcius is equal to " + ferhhite + "<br>" )
document.write(f + " celcius is equal to " + celcius  + "<br>")

Task 007
var item1 = 200;
var item2 = 50;
var qty_item1 = 4;
var qty_item2 = 6;
var shipping = 1000;
document.write("Price Of Item 1 is " + item1 + "<br>");
document.write("Quantity Of Item 1 is " + qty_item1 + "<br>");
document.write("Price Of Item 2 is " + item2+ "<br> ");
document.write("Quantity Of Item 1 is " + qty_item2 + "<br>");
document.write("Shipping Charges are" + shipping + "<br> ");
var total = (item1 * qty_item1 ) + (item2 * qty_item2 ) + shipping ;
document.write("Total Charges are " + total+ "<br>");

Task 008
document.write("<h1>Mark Sheet</h1>");
var total_num = 1200;
var obtaineds = 789;
var per = (obtaineds * 100 ) / total_num;
document.write("Total Matks" + total_num + "<br>");
document.write("Obtained  Matks" + obtaineds + "<br>");
document.write("Percantage" + per + "<br>");

Task 009
document.write("Cruncey In Pkr");
var cruncey = (10 *104.80) + (25 * 28);
document.write("Total Pakistani Cruncey Is " + cruncey );

Task 10
var num = ((( 10 + 5 ) * 10 )/2);
document.write("Single Expressions " + num ); 

var date = Date('d-m-y');
var b_day = "19-7-2000";
alert (date - b_day * 3600)

chapter 6 t0 9

Task 001
document.write("Result<br>");
var a = 10;
document.write("The Value Of a is" + a + "<br>");
document.write("--------------<br>");
for(var a = 10 +1; a <= 12 ; a++)
{
 
    document.write("The Value Of a++ is"+a+"<br>");
}

for(var a = 11 ; a > 9 ; a--)
{
 
    document.write("The Value Of a-- is"+a+"<br>");
}

Task 002
var a =  2;
var b =1
var Result = --a - --b + ++b + b--;
document.write(--a + "<br>");
document.write(--a - --b + "<br>");
document.write(--a - --b + ++b + "<br>");
document.write(--a - --b + ++b + b-- + "<br>");
document.write(Result + "<br>");

Task 003
var user = prompt("Please Enter Your Name");
alert ("WELCOME " +user);

Task 004
var table = prompt("Enter Table ");
if(table != Number )
 {
 var table = 5;
for(var a = 1 ; a <= 10 ; a++)
{
document.write(table +"  x " + a  +" = " + a * table + "<br>" );
 }
 }
else
for(var a = 1 ; a <= 10 ; a++){
document.write(table +"  x " + a  +" = " + a * table + "<br>" );
}

Task 005
var eng = prompt("ENGLISH MARKS");
var urdu = prompt("URDU MARKS");
var math = prompt("MATH MARKS");
var each_marks = 100;
var total_obtained = Number(eng) + Number(urdu) + Number(math);
var total_marks = 100 * 3 ;
var per = (total_obtained * 100)/total_marks;
document.write("<table>");
document.write("<tr>");
document.write("<td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percantage</td>")
document.write("</tr>");
document.write("<tr>");
document.write("<td>English</td><td>"+each_marks+ "</td> <td>"+ eng +"</td><td>"+ (eng * 100)/each_marks+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Urdu</td><td>"+each_marks+ "</td> <td>"+ urdu +"</td><td>"+ (urdu * 100)/each_marks+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Math</td><td>"+each_marks+ "</td> <td>"+ math +"</td><td>"+ (math * 100)/each_marks+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Totals</td><td>"+total_marks+ "</td> <td>"+total_obtained+"</td><td>"+per+"</td>");
document.write("</tr>");
document.write("</table>");

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Chapter 9 to 11


 Task 001
 var city = prompt("Enter City Name");
 if(city == "karachi")
 {
     alert("Welcom To The City Of Light");
 }
 else {
     alert("Opps go back");
 }

Task 002
var gender = prompt("Male / Female / Other");
if(gender == "male")
{
    alert("Good Morning Sir");
}
else if(gender == "female"){
    alert("Good Morning Mam'm");
}
else {
    alert("Error")
} 

Task 003
alert("Traffic Linces Test");
var colour = prompt("Enter Colour Name Only");
if(colour = "Red")
{
    alert("Must Stop"); 
}
else if(colour = "Yellow")
{
    alert("Ready To Move"); 
}
else if(colour = "Green")
{
    alert("Move Now");
}
else{
    alert("colour name only allowed");
}

Task 004
var fuel = prompt("Enter Fuel");
if(fuel < 0.25)
{
    alert("Please refill the fuel in your car");
}

Task 005
a)condition is true.
b)condition is false.
c) 1) condition is false.
   2) condition is true.
   3) condition is false.
   4) condition is true.
d) condition is true cost are equal.
e) condition is false.
f) condition become true.

Task005
var eng = prompt("ENGLISH MARKS");
var urdu = prompt("URDU MARKS");
var math = prompt("MATH MARKS");
var each_marks = 100;
var total_obtained = Number(eng) + Number(urdu) + Number(math);
var total_marks = 100 * 3 ;
var per = (total_obtained * 100)/total_marks;
if(per <= 40)
{
    grade = "D";
    remarks = "Need More Hard Work";
}
else if(per <= 60)
{
    grade = "C";
    remarks = "Need More Hard Work";
}
else if(per <= 70)
{
    grade = "B";
    remarks = "Need To Improve";
}
else if(per <= 80)
{
    grade = "A";
    remarks = "Good";
}
else if(per => 90)
{
    grade = "A+";
    remarks = "Excellent";
}

else{
    grade = "fail";
}
document.write("<div id='marksheet'>");
document.write("<h1>Total Marks " + total_marks + "</h1>");
document.write("<h1>Obtained Marks " + total_obtained + "</h1>");
document.write("<h1>Percantage " + per + "</h1>");
document.write("<h1>Grade " + grade + "</h1>");
document.write("<h1>Remarks " + remarks + "</h1>");
document.write("</div>");

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

 Chapter 21 TO 25


    Task 001
    var firstname = prompt("First Name");
    var lastname = prompt("Last Nme");
    alert(firstname + " " + lastname);

    Task 002
    var mob = prompt("Enter Your Favruite Mobile Model");
    var len = mob.length;
    alert("My Favruite Phone Is " + mob + "\n Length Of String Is " + len);

    Task 003
    var pak = "Pakistan";
    var ali = pak.indexOf("n");
    document.write("String " + pak +"<br>");
    document.write("Index of 'n' is " + ali);

    Task 004
    var str = "Hello World";
    var ind = str.lastIndexOf("l");
    document.write("String " + str + "<br>");
    document.write("Index of 'n' is " + ind);

    Task 005
    var pak = "Pakistan";
    var slic = pak.slice(0,4)
    var ali = slic.indexOf("i");
    document.write("String " + pak +"<br>");
    document.write("Index of 'i' is " + ali);

    Task 006
    var firstname = [prompt("First Name")];
    var lastname = [prompt("Last Nme")];
     document.write(firstname.concat(lastname));

    Task 007
    var haider = "Hayderabad";
    var indexnum = haider.indexOf("abad");
    var change = haider.slice(0, indexnum);
    var replacing_text = "Islam";
    var third = haider.slice(indexnum, 10);
    document.write( replacing_text + third);

    Task 008
    var message = "Ali and Sami are best friends. They play cricket and football together";
    var indexnum = message.indexOf("and");
    var change = message.slice(0, indexnum);
    var replacing_text = " & ";
    var third = message.slice(indexnum+3);
    document.write( message + replacing_text + third);

    Task 009
    var value = 478;
    var string = value.toString();
    var num = Number(value);
    document.write("Value " + value + "<br>");
    document.write("String " + string + "<br>");
    document.write("Number " + num + "<br>");

    Task 10
    var lower = "peanut";
    var uper = lower.toUpperCase();
    document.write("User Input " + lower + "<br>");
    document.write("Upper Case " + uper + "<br>");

    Task 11
    var lower = "javascript";
    var a = lower.charAt(0);
    var uper = a.toUpperCase();
    var name = lower.slice(1, 9);
    document.write(uper+name);

    Task 12
    var d = 35.56;
    var s = d + '';
    s = s.replace('.', '');
    s = parseInt(s);
    s.toString();
    document.write("Number " + d + "<br>");
    document.write("String " + s + "<br>");

    Task 13
    var pattern = /[a-zA-Z0-9]/
    var user = prompt("User Name");
    if (user.match(pattern)) {
        alert('valid');
    }
    else {
        alert('invalid');
    }

    Task 14
    var fruir = ["APPLE", "MANGO", "ORANGE", "GRAPES", "CAKE"];
    var user_enter = prompt("Enter Your Order");
    var cass = user_enter.toUpperCase();
    var index = fruir.slice["cass"];

     for (var i = 0 ; i <= fruir.length ; i++)
    {
        if(fruir[i] == cass)
        {
            document.write(fruir[i] + "  is avaliable at index " + i + " of Our bakery");
        }


     }

    TASK 15
    var pass = prompt("Enter Passwords");
    var regex_alphpa = /[^a-z]/gi(pass);
    var regex_num = /[^0-9]/g(pass);

    if(pass.length > 7 ||   )

    Task 16
    var name = "University of Karachi";
    var d = name.split("");
    document.write(d \n)

    Task 17
    var pak = "Pakistan";
    var n = 1;
    var index = pak.lastIndexOf(6);
    document.write(pak.substring(pak.length - n));

    Task 18
    var text = "the quick brown fox jumps over the lazy dog";
    var count = text.split("t");
    var len = count.length -1;
    document.write(len);

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------


    Chapters 26 To 30





    Task 001
    var psoi = prompt("Enter Positive Integer");
    var round = Math.round(psoi);
    var cel = Math.ceil(psoi);
    var flor = Math.floor(psoi);
    if(psoi < 0)
    {
        alert("Value Must Be Positive")
    }
    else
    {
        document.write("Number " + psoi + "<br>");
        document.write("Round Off Value " + round + "<br>");
        document.write("Floor Value " + flor + "<br>");
        document.write("CeilValue " + cel + "<br>");

    }

    Task 002
    var psoi = prompt("Enter Negative Integer");
    var round = Math.round(psoi);
    var cel = Math.ceil(psoi);
    var flor = Math.floor(psoi);
    if (psoi > 0) {
        alert("Value Must Be Negative")
    }
    else {
        document.write("Number " + psoi + "<br>");
        document.write("Round Off Value " + round + "<br>");
        document.write("Floor Value " + flor + "<br>");
        document.write("CeilValue " + cel + "<br>");

    }

    Task 003
    var valu = -6;
    var absulu = Math.abs(valu);
    document.write(absulu);

    Task 004
    var maths = Math.random() * 4;
    var flo = Math.floor(maths);
    document.write("Random Dice Value 1 : " + Number(flo+2) + "<br>");
    document.write("Random Dice Value 2 : " + Number(flo+1) + "<br>");


    Task 005
    var random = Math.random() * 2;
    var flor = Math.floor(random);
    for (var i = 0 ; i < 2 ; i++)
    {

    if(flor > 0)
    {
        document.write(flor + "<br>");
        document.write("Random Coin Value : Head");
    }

    if (flor < 1) {
        document.write(flor + "<br>");
        document.write("Random Coin Value : Tail");
    }
    break;
     }

    Task 006
    var random = Math.floor(Math.random() * 100) + 1;
    document.write("Random Number Between 1 TO 100 Is  "+random)


    Task 007
    var kg = prompt("Enter Weight ");
    var pasrs = parseInt(kg);
    document.write("a) " +pasrs + "<br>");
    document.write("b) " + kg + "<br>");
    document.write("c) " +  Number(pasrs + 0.2) + "<br>");
    document.write("d) " + Number(pasrs + 0.2) + "Kilograms <br>");

    Task 008
    var luck = prompt("Enter Number Between 1 to 10");
    var tryy = Math.floor(Math.random() * 10) + 1;
    if(luck === tryy)
    {
        alert("Congrats")
    }
    else {
        alert("Try Again");
    }



----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

    Chapter 31 to 34






    //Task 001
    var date = new Date();
    document.write(date);

    Task 002
    var total_month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
    var date = new Date();
    document.write(total_month[date.getMonth()]);

    Task 003
    var date = new Date();
    var date_string = date.toString();
    var date_day = date_string.slice(0, 3);
    document.write(date_day);

    Task 004
    var date = new Date();
    var string = date.toString();
    var slic = string.slice(0, 3);
    if(slic == "sun" || slic == "sat")
    {
        document.write("It is Funday ")
    }

    Task 005
    var date = new Date();
    var day = date.getDate();
    if(day > 15)
    {
        document.write("Last Fifteen Days Of Month");
    }
    else if(day < 15)
    {
        document.write("First Fifteen Days Of Month");
    }

    Task 006
    var dat = new Date();
    var jan = dat.getTime();
    var jans = jan * 60;
    document.write("Current Date " + dat + "<br>");
    document.write("Ellisped Millisecond since january 1 ,1970 " + jan + "<br>")
    document.write("Ellisped Minitues since january 1 ,1970 " + jans + "<br>")

    Task 007
    var dat = new Date();
    var hours = dat.getHours();
    if (hours > 12) {
        alert("Its PM")
    }
    if (hours < 12) {
        alert("Its AM")
    }

    Task 008
    var lastday = function(y,m){
        return  new Date(y, m +1, 0).getDate();
    }
    document.write((lastday(2020,12)));



    Task 009
    var d =new Date().getTime() - new Date("June 18, 2015").getTime();
    var days = (d / (1000 * 60 * 60 * 24));
    var floor = Math.floor(days);
    document.write(floor);

    Task 10
    var d =new Date().getTime() - new Date("January 1, 2015").getTime();
    var days = (d / (1000));
    var floor = Math.floor(days);
    document.write(floor);

    Task 11
    var dat = new Date().getTime() - new Date("Sat Jun 20 2020 06:55:06 GMT-0700 (Pacific Daylight Time)").getTime();
    var floor = Math.floor(dat);
    document.write(floor);
                                                                               



    Task 13
    var age = prompt("Enter Your Age");
    var d = new Date();
    var year = d.getFullYear();
    var yea = year - age;
    document.write("Your Age is " + age + "<br>");
    document.write("Your Birth Year is " + yea);

    Task 14
    var cust_name = "ALI MUHAMMAD KHAN";
    var array = ["January", "Feburary", "March", "April", "May", "June", "July", "August","Septamber","October","November","December"];
    var mon = new Date();
    var mont = mon.getMonth();
    var month = array[mont];
    var unit = 300;
    var unit_charge = 10;
    var payable = unit * unit_charge;
    var late_payable = (unit * unit_charge + 100);
    var d = new Date("July 21, 1983");
    document.write("<h1>K-Electric Bills</h1><br>");
    document.write("Customer Name :" + cust_name + "<br>");
    document.write("Month Of :" + month + "<br>");
    document.write("Number Of Unit :" + unit + "<br>");
    document.write("Charges Per Unit :" + unit_charge + "<br>");

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write("Net Amount Payable  :" + "( 10/6/2020 ) " + payable + "<br>");
    document.write("Late Amount Charges :" + 100 + "<br>");
    document.write("Late Amount Payable  :" + "( 18/6/2020 ) "+ late_payable + "<br>");


----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------


    Chapter 35 to 38




    Task 001
    function time()
    {
        document.write(new Date())

    }
    time();


    Task 002
    function user()
    {
        var first = prompt("Enter First Name");
        var last = prompt("Enter Last Name");
        alert(first + " " + last);
    }
    user();


    Task 003
    function add()
    {
        var val1 = prompt("Enter Value 1");
        var val2= prompt("Enter Value 2");
        var sum = Number(val1) + Number(val2);
        return  alert(sum);
    }
    add();


    Task 004
    function cal()
    {
        var val1 = prompt("Enter Value 1");
        var val2 = prompt("Enter Value 1");
        var ope = prompt("Enter Operater");

        if(ope === "+")
        {
            var res = Number(val1) + Number(val2);
        }
        else if (ope === "-") {
            var res = Number(val1) - Number(val2);
        }
        else if (ope === "*") {
            var res = Number(val1) * Number(val2);
        }
        else if (ope === "/") {
            var res = Number(val1) * Number(val2);
        }
        else
        {
            document.write("Error");
        }
        document.write(val1 + "  " + ope + " " + val2 + " = " + res);
    }
    cal();


    Task 005
    function sumOfSquares(num) {
        var i;

        for (i=0;i<=num;i++)
        {
            var sum=0;
            var i = i*i;
            sum = i;
        }
    document.write("The sum of squares for numbers" +num+ "is " +sum) ;
    }
    var num = parseInt(prompt("Enter a number:"));
    sumOfSquares(num);


    Task 006
        function factorial(n){
        var answer = 1;
        if (n == 0 || n == 1){
          return answer;
         }else{
             for(var i = n; i >= 1; i--){
            answer = answer * i;
                 }
             return answer;
                }
                }
            var n = 4;
            answer = factorial(n)
            document.write("The factorial of " + n + " is " + answer);



    Task 007
    function counting()
    {
        var start = prompt("Enter Starting Number");
        var end = prompt("Enter Ending Number");

        for(start ; start <= end ; start ++)
        {
            document.write(start + "<br>");
        }
    }
    counting();


    Task 008
    function hypo()
    {
        var base = 4;
        var prep = 8;

        var hypo = Number(base) * base + Number(prep) * prep;
        document.write(hypo);
    }
    hypo();


    Task 009
    function triangle(width,height)
    {
        var area = width * height;
        document.write(area);
    }
    triangle(12, 8);


    Task 10
    function pando()
    {
        var text = prompt("Enter Pandroilim Word");
        var word = "";
        for(var i = text.length - 1 ; i >= 0 ; i-- )
        {
            word += text[i];
        }

        if(word == text)
        {
            document.write(text + " Word is Pandlorim ");
        }
    }
    pando();


    Task 11
    var line = "the quick brown fox";
    function uppercase(line) {
        var array1 = line.split(' ');
        var newarray1 = [];

        for (var x = 0; x < array1.length; x++) {
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
        }
        return newarray1.join(' ');
    }
    document.write(uppercase(line));

    Task 12
    function long_string()
    {
        var str = prompt("Enter Text");

        document.write(my);
    }
    long_string();


    Task 13
    function counting(val1, val2) {
        var letter_Count = 0;
        for (var position = 0; position < val1.length; position++) {
            if (val1.charAt(position) == val2) {
                letter_Count += 1;
            }
        }
        return letter_Count;
    }

    document.write(counting('JSResourceS.com', 'o'));


    Task 004

    function calcCircumference(radius)
    {
        var radius = 10;
        var result = 2 * (3.14) * radius;
        document.write("The circumference is " + result)
    }
    calcCircumference();

    function calcArea(radius) {
        var radius = 10;
        var result =3.14 * radius * radius;
        document.write("The circumference is " + result)
    }
    calcArea();
	
	
	
	----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------



Chapter 38 to 42


Task 001

var a =2;
var b = 3;

var c = Math.pow(a,b);
var d = c;
document.write(d);



Task 002

var a=  prompt("Enter Year",);
	
	if((0 === a % 4) && (0 !== a % 100) || (0 == a % 400) )
		{
			document.write("Year is Leap Year");
		}
	else{
		document.write("Not an Leap Year"); 
	}
	
	
	
	
Task 003
	
	var a = 10;
	var b =20;
	var c = 15.5;
	

	
	function area()
	{
		var S = (a+b+c)/2;
		var areas =S* (S-a)*(S-b)*(S-c);
		var d = Math.floor(areas);
		document.write("Area of Triangle is  " + " = " + d);
	}
	
	area();
	
	
Task 004

		var math = 100;
		var urdu = 89;
		var english = 90;
	
	function total(c){
		
		var c =totals;
		var totals = math + urdu + english;
		document.write("Total Marks "+totals + "<br>");
	}
	
	function per(){
		total(totals = math + urdu + english);
	
		var percan = (totals*100)/300;
		
		document.write("Percantage "+percan + "<br>");
	}
	
	function main(math,urdu,english){
		
		
		total();
		per();
	}
	main()
	
	
	
Task 005

	var name = "mukthayar";
	var index = name.indexOf("t");
	document.write(index);
	
	
	
Task 006

var strings = ["My name is mukthayar how are you all people"];
mk = strings.map(x=>x.replace( /[aeiou]/g, '' ));
document.write(mk);



Task 008

	var km = prompt("Enter Value");

    function meter()
    {
        meters = (km * 1000);
        document.write(km + "km equal to " + meters +"m<br>");
    }
    meter()

    function foot()
    {
        footss = (km * 3281);
        document.write(km + "km equal to " + footss +"foot<br>");
    }
    foot()

    function inch()
    {
        inches = (km * 39370);
        document.write(km + "km equal to " + inches +"inches<br>");
    }
    inch()

    function centi()
    {
        centis = (km * 100000);
        document.write(km + "km equal to " + centis +"Centemeter<br>");
    }
    centi()



Task 009

var ot = 40;
var ot_amount = 12;

var ot = 40-1;
document.write("Total Overtime Amount is " + ot * ot_amount);

--------------------------------------------------------------------------------------------------------------------------
==========================================================================================================================

Chapter 43 TO 48

Task 001 

function msg()
{
    alert("Thanks for purchasing this phone");
}

Task 003

function remove(x) {
    var i = x.parentNode.parentNode.rowIndex;
    document.getElementById("tabs").deleteRow(i);
}

Task 004
function res(){

var z =  document.getElementById("img");
z.src = "mob4.jpg";
}


function chng()
{
var x = document.getElementById("img");
   x.src = "mob3.jpg";
}


Task 005
var x =0
function incre()
{
 var textcontrol = document.getElementById("texts");

			textcontrol.value = ++x;		  
}

function decre()
{
 var textcontrol = document.getElementById("texts");
          var x = textcontrol.value -= 1;
		  
}

==========================================================================================================================
==========================================================================================================================

Chapter 49 to 52


Task 001

	function profile()
	{
	
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var password = document.getElementById("password").value;
	
	
  document.getElementById("names").innerHTML = name;
  document.getElementById("emails").innerHTML = email;
  document.getElementById("phones").innerHTML = phone;
  document.getElementById("pass").innerHTML = password;
  document.getElementById("for").style.display = "none";
 var hide = document.getElementById("pros");
  hide.style.display = "block";

	}

 Task 002

     function full()
 {
     var text = "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million. It is the 33rd-largest country by area, spanning 881,913 square kilometres"
    var peragraph = document.getElementById("para")
    peragraph.innerHTML = text ;

    

 }

 Task 003
 var x = 0;

document.getElementById("edit_area").style.display = "none";

function editss()
{
	
	document.getElementById("edit_area").style.display = "block";
	

	var table = document.getElementById("table"),rIndex;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                    rIndex = this.rowIndex;
                    console.log(rIndex);
                    
                    document.getElementById("fname").value = this.cells[1].innerHTML;;
                    document.getElementById("femail").value = this.cells[2].innerHTML;
                    document.getElementById("fphone").value = this.cells[3].innerHTML;

					
                };
            }    
            
}

function editRow()
            {
                table.rows[rIndex].cells[1].value = document.getElementById("fname").innerHTML;
                table.rows[rIndex].cells[2].innerHTML = document.getElementById("femail");
                table.rows[rIndex].cells[3].innerHTML = document.getElementById("fphone");
            }

function Add_profile()
{
	var name =	document.getElementById("name").value;
	var email =	document.getElementById("email").value;
	var phone=	document.getElementById("phone").value;

	var row =document.createElement("tr");
	row.setAttribute("id","main_row")

	function numbe()
	{
	var a =   0;
 	a.innerHTML = ++x;
	}
	numbe()
	

	var col1 = row.insertCell(0);
	col1.setAttribute("id","roll1")
	var z = col1.innerHTML = x;
	
	var col2 =row.insertCell(1);
	col2.setAttribute("id","name1")
  	col2.innerHTML = name;  

	var col3 = row.insertCell(2);
	col3.setAttribute("id","email1")
  	col3.innerHTML = email;
	 
	  var col4 = row.insertCell(3);
	  col4.setAttribute("id","phone1");
  	col4.innerHTML = phone;

	  var col5 = row.insertCell(4);
	  var button_del =document.createElement("button")
	  button_del.setAttribute("onClick","remove()");
	  button_del.innerHTML = "Remove";
	  col5.appendChild(button_del)

	  var col6 = row.insertCell(5);
	  var edit_btn =document.createElement("button")
	  edit_btn.setAttribute("onClick","editss()");
	  edit_btn.setAttribute("id","edit");
	  edit_btn.innerHTML = "Edit";

  	  col6.appendChild(edit_btn)

	

	 row.appendChild(col5,col4,col3,col2,col1);
	 var tabl = document.getElementById("table");
	 tabl.appendChild(row);
	
}

=====================================================================================================================
=====================================================================================================================


			Chapter 58-67


			Task 001

	(i)
		var div = document.getElementById("main-content");

	(ii)
		var children = div.parentNode;
		document.write(children)
  
  	(iii)	
  	    var text = document.getElementsByClassName("render");
		var text1 =text[0].innerHTML;		   
  		 var text2 =text[1].innerHTML;
  		 var text3 =text[2].innerHTML;
  		 var text4 =text[3].innerHTML;
  		 var text5 =text[4].innerHTML;
		document.write(text1 + "<br>" + text2+ "<br>" +text3+ "<br>" +text4+ "<br>" +text5 + "<br>");

	(iv and v)
		document.getElementById("first-names").value = document.getElementById("firstname").innerHTML;
		document.getElementById("email").value = document.getElementById("emails").innerHTML;
		document.getElementById("last-name").value = document.getElementById("lastName").innerHTML;
		

		Task 002

	(i)
		document.write("NODE TYPE OF DIV IS  "+div.nodeType + "<BR>")

	(ii)
		var last_name  =document.getElementById("lastName");
		document.write("NODE TYPE OF Last Name IS  "+last_name.nodeType + "<BR>")
		document.write("Child NODE  OF Last Name IS  "+last_name.childNodes[0] + "<BR>")
		
	(iii)
  		var change_text = last_name.childNodes[0];
  		change_text.nodeValue = "new last name";
  

	(iv)
  		console.log(div.firstChild)
		console.log(div.lastChild)
		  
	(v)
  		console.log(last_name.nextSibling)
		 console.log(last_name.previousSibling)
		 

	(vi)
 		var email_nod = document.getElementById("email");
 		console.log(email_nod.parentNode)
  		console.log(email_nod.nodeType)


*/
