function Call_Loop(){//calling function
    var Anniversary="";//creating two variables
    var X=1;
        while (X<4){//adding whiile statement
            Anniversary+="<br>" +X;//adding condition
        X++;//+1 increment
        document.write("Happy Anniversary");//this must appear if X<4
        }
    document.getElementById("loop").innerHTML=Anniversary;//texr appears 
}


function for_Loop(){//calling function
    var Instruments=["Guitar","Piano","Violin"];//creating variables
    var Content="";
    var Y;    

for(Y=0; Y<Instruments.length; Y++){//adding for statement
Content+=Instruments[Y]+"<br>";//condition
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;//displaying Instruments
}

function array_Function(){//calling the function
 var Dog_Picture=[];//creating a variable
 Dog_Picture[0]="sleeping";//array beginning with 0
 Dog_Picture[1]="eating";
 Dog_Picture[2]="playing";
document.getElementById("Array").innerHTML="In this picture the dog is"+Dog_Picture[2]+".";//displaying text
}

function constant_function(){//calling the function
    const Fruits={type:"apple", color:"green", taste:"sweet"};//adding variables
    Fruits.color="red";//changed value from green to red
    Fruits.price="$3.20";//adding variable price withhhhhhhh value of 3.20
    document.getElementById("Constant").innerHTML="The cost of the"+Fruits.type+"is"+Fruits.price;//displaying text
}

function Let(){//calling function
var Y=13//creating a variable
document.write(Y);
    {
    let X=5;//using let
    document.write("<br>"+X);
    document.getElementById("let").innerHTML;//displaying numbers
    }
}

function myFunction(Krisi){
    return "Hello" + Krisi;
    }
    document.getElementById("return").innerHTML=myFunction("Krisi");

let student={
name:"Laura",//adding properties
age:"22",
gender:"female",
student_number:"10370809",
description:function (){//adding method
return "The student name is" + this.name +"her age is" + this.age + "her gender is" + this.gender + "her student number is" + this.student_number;
}
};
document.getElementById("object").innerHTML=student.description();