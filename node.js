function get_info() {
    let catType
    if (document.getElementById("inoutdoor").checked){
        catType = "inoutdoor";
    }else if (document.getElementById("indoor").checked){
        catType = "indoor";
    }else if (document.getElementById("outdoor").checked){
        catType = "outdoor";
    }

    document.getElementById("info").innerHTML = "Cat's card: ";
    document.getElementById("name1").innerHTML = "Cat's name: " + document.getElementById("name").value;
    document.getElementById("age1").innerHTML = "Cat's age: " + document.getElementById("age").value;
    document.getElementById("date1").innerHTML = "Cat's birthday date: " + document.getElementById("date").value;
    //document.getElementById("color1").innerHTML = "Cat's color: ";
    document.getElementById('colr').style.backgroundColor = document.getElementById("color").value;
    document.getElementById('colr').style.color = document.getElementById("color2").value;
    document.getElementById("lazy1").innerHTML = "Cat's laziest: " + document.getElementById("lazy").value + "%";
    document.getElementById("types").innerHTML = "Cat's type: " + catType;
}