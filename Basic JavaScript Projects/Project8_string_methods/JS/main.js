function My_Function(){
var part_1="I"
var part_2="love"
var part_3="dancing"
var whole_sentence=part_1.concat(part_2,part_3);
document.getElementById("Conc1").innerHTML = whole_sentence;
}

function Slice_Function(){
var Sentence="All things happen for a reason!";
var Section=Sentence.slice(10,46);
document.getElementById("Slice").innerHTML=Section;
}

function My_Function1(){
var x=13;
document.getElementById("toString1").innerHTML=x.toString();
}

function My_Function2(){
    var y=131255.30115678
    document.getElementById("precision2").innerHTML=y.toPrecision(5);
}