document.write(typeof "String Variable");//returns string since it is a word and  display it

function my_function() {//creating a function with name my_function
    var n=(-Number.MAX_VALUE)*2;//showing I am looking for negative infinity
    document.getElementById("test").innerHTML=n;//displaying the variable
}
function my_function1() {//creating a function with name my_function1
    var n=(Number.MAX_VALUE)*2;//showing I am looking for positive infinity
    document.getElementById("test1").innerHTML=n;//displaying the variable
}
function my_function2(){//creating a function with name my_function2
    var y=(5<10);//creating a variable with value that can be either true or false
    document.getElementById("test2").innerHTML=y;//displaying the variable
}

function my_function3(){//creating a function with name my_function3
    var x=(5>10);//creating a variable with value that can be either true or false
    document.getElementById("test3").innerHTML=x;//displaying the variable
}


console.log(3+3);//displ""aying 6 in the console in the browser

document.write("50"+5);//it combines string with a number=505

console.log(60>90);

function my_function4(){//creating a function with name my_function3
    var x=(5==5);//creating a variable with value that can be either true or false
    document.getElementById("test4").innerHTML=x;//displaying the variable
}

function my_function5(){//creating a function with name my_function3
    var x=(5==4);//creating a variable with value that can be either true or false
    document.getElementById("test5").innerHTML=x;//displaying the variable
}

DateofGraduation1=13/06/2022;//data=value
DateofGraduation2=13/06/2022;//data=value
document.write(DateofGraduation1===DateofGraduation2);//comparison 

DateofGraduation1=13/06/2022;//data=value
DateofGraduation2=15/06/2022;//data=value
document.write(DateofGraduation1===DateofGraduation2);//comparison 

DateofGraduation1=13/06/2022;//data=value
Number1=15/06/2022;//data=value
document.write(DateofGraduation1===Number1);//comparison 

DateofGraduation1=13/06/2022;//data=value
Number2=13/06/2022;//data=value
document.write(DateofGraduation1===Number1);//comparison

document.write(9>2 && 10>4);//displaying true by using AND operator

document.write(1>2 && 10>4);//displaying false by using AND operator

document.write(9>2 ||  10>4);//displaying true byusing OR operator

document.write(5>10 || 10>20);//displaying false by using OR operator

function not_Function(){//creating a function
    document.getElementById("not").innerHTML =!(1>10);//displa 1 not > than 10
    }

function not_Function1(){//creating a function
    document.getElementById("not1").innerHTML =!(50>10);//displaying 50 not > than 10
    }