var Y=15;//adding global variable
function Subtract_Numbers_1(){//stating first function
document.write(50-Y+"<br>");//displaying the task
}
function Subtract_Numbers_2(){//adding nested function
    document.write(Y-5);//displaying the task
}
Subtract_Numbers_1();//showing result
Subtract_Numbers_2();//showing result

function Subtract_Numbers_3(){//adding function
    var Z=15;//adding local variable
    document.write (50-Z +"<br>");//adding scope/displaying result
}
function Subtract_Numbers_4(){//adding function
    document.write(Z-5);//not displaying result
}
Subtract_Numbers_3();
Subtract_Numbers_4();

function Subtract_Numbers_3(){//adding function
    var Z=//adding local variable and not adding value on purpose 
    document.write (50-Z +"<br>");//adding scope/displaying result
}
function Subtract_Numbers_4(){//adding function
    document.write(Z-5);//not displaying result
}
Subtract_Numbers_3();//ensuring it is displayed
Subtract_Numbers_4();//ensuring it is displayed

function Subtract_Numbers_3(){//calling function
    var Z=15;//assigning value to a variable
    console.log(50-Z);//displaying in console
}
function Subtract_Numbers_4(){//calling function
    console.log(Z-5);//displaying math calculation in console
}
Subtract_Numbers_3();//ensuring it is displayed
Subtract_Numbers_4();//ensuring it is displayed

function Time_Function(){//making function
    {
    document.getElementById("time").innerHTML="Have a great day!";//displaying the string Have a great day!
    }
}

function Year_Function(){//calling function
    if (new Date().getFullYear()<2023)//requesting year
        {
        document.getElementById("year").innerHTML="Welcome to the current year 2022";//display text if the year is less than 2023
        }
    }

    function My_Grade1(){//calling function
        Grade=document.getElementById("Grade").value;//taking id grade
        if (Grade<3)//conditional statement
            {
            document.getElementById("my_grade").innerHTML="You failed!";//calling p id
            }
        }

    function My_Lesson1(){//calling function
    Lesson=document.getElementById("Lesson").value;//taking id Lesson
    if(Lesson < 3){//assigning a value to conditional statement
        Learn = "You have to study more";//display text
    }
    else{
        Learn = "You are the best";//if not above display this
    }
    document.getElementById("mylesson").innerHTML=Learn;//display text based on which branch path it goes
}

function Time_function(){ //calling function
var Time=new Date().getHours();//creating a variable
var Reply;//variable Reply
if(Time<12==Time>0){//conditional statement
    Reply="It is the morning time!";//if abovbe,do what is written
}
else if(Time>12==Time<18){//if not above,do what is written=it is afternoon
    Reply="It is aftenoon";
}
else{//if not both of the above,write=evening time
    Reply="It is evening time";
}
document.getElementById("Time_of_the_day").innerHTML=Reply;
}//displaying text

