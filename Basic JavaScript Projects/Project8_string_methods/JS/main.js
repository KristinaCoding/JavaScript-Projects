function My_Function(){//calling a function
var part_1="I"//creating var=variables
var part_2="love"
var part_3="dancing"
var whole_sentence=part_1.concat(part_2,part_3);//getting all variables concatenated
document.getElementById("Conc1").innerHTML = whole_sentence;//displaying text
}

function Slice_Function(){//calling a function
var Sentence="All things happen for a reason!";//creating a sentence
var Section=Sentence.slice(10,46);//using slice methos
document.getElementById("Slice").innerHTML=Section;//displaying the "happen for reason" part
}

function My_Function1(){//calling function
var x=13;//creating a variable
document.getElementById("toString1").innerHTML=x.toString();//using toString to dispay text
}

function My_Function2(){//calling function
    var y=131255.30115678//creating a variable
    document.getElementById("precision2").innerHTML=y.toPrecision(5);//using precision method
}