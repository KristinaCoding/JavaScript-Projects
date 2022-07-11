function Switch_Function(){//calling function
    var Fruit_Output;//creating variables
    var Fruits=document.getElementById("Fruit_Input").value;//displaying input
    var Fruit_String="is a great choice";
    switch(Fruits) {//using switch function
        case "Apple"://adding cases typing the list of fruits
        Fruit_Output="Apple" + Fruit_String;
        break;
        case "Orange":
        Fruit_Output="Orange" + Fruit_String;
        break;
        case "Banana":
        Fruit_Output="Banana" + Fruit_String;
        break;
        case "Pear":
        Fruit_Output="Pear" + Fruit_String;
        break;
        case "Dragon_Fruit":
        Fruit_Output="Dragon_Fruit" + Fruit_String;
        break;
        case "Cherries":
        Fruit_Output="Cherries" + Fruit_String;
        break;
        default:
            Fruit_Output="Please enter a fruit exactly as written in the above list";//giving instructions
    }
    document.getElementById("Output").innerHTML=Fruit_Output;//displaying output

    }

    function How_are_you(){//calling function
        var X=document.getElementsByClassName("Click");//variable creation
        X[0].innerHTML="The text has changed";//change text 
    }
  
   var canvas = document.getElementById("MyCanvas");//creating canvas
   var c = canvas.getContext("2d");//making 2D drawing in this case text
   var grd =c.createLinearGradient(0,0,170,0);//adding linear Gradient
   grd.addColorStop(0,"pink");//gradient colors
   grd.addColorStop(1,"coral");

   //body
   c.beginPath();//starting drawing
    c.font="30px Arial";
    c.strokeText("Hello,World",10,50);//what is written
    c.fillStyle = grd;//adding grd filling
    c.fillText("Hello,World",10,50);//filling text with gradient
   c.closePath();//finishing drawing
