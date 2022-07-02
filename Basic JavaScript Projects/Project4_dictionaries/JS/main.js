function my_dictionary(){//adding function with name
    var Fruit={ //adding variable
    Fruit:"Apple",//adding values to the variable
    Color:"Red",
    Form:"Oval",
    Taste:"Sweet"
    };//ending the values
    delete Fruit.Form;//deleting one value
    document.getElementById("Dictionary").innerHTML=Fruit.Form;//making sure it is displaying
}

