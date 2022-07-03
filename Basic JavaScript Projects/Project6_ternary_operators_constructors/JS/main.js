function Ride_Function(){//create a function
    var Height, Can_ride;//create variable
    Height=document.getElementById("Height").value;//taking id so it is displayed
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";//giving answer in the form
    document.getElementById("Ride").innerHTML=Can_ride +"to ride.";//connect the answer to the number
}

function Clothes(Price,Color,Type){//crate a function
    this.Clothes_Price=Price;//creating data for variables
    this.Clothes_Color=Color;//creating data for variables
    this.Clothes_Type=Type;//creating data for variables
}
var Jacky=new Clothes("102$", "Green", "dress");//variables with values
var Emily=new Clothes("300$", "denim", "skirt");//variables with values
var Erik=new Clothes("123$", "pink","shirt");//variable with values
function myFunction(){
    document.getElementById("New_and_This").innerHTML="Emily has "+Emily.Clothes_Type+"-colored" +Emily.Clothes_Color+"that costs"+Emily.Clothes_Price;
}//displying text in the page

function Function1(){//creating function
    document.getElementById("Nested_Function").innerHTML=Count();//taking id from HTML
    function Count(){//Creating another function
        var Starting_Point=5;//creating variable
        function Plus_one() {Starting_Point-=2;}//creating nested function with values related to the previous variable
        Plus_one();//starting function
        return Starting_Point;//giving a resutl
    }
}