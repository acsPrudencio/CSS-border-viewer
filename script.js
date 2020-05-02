function change() {
    var topLeft = Number(document.getElementById("topLeft").value);
    var topRight = Number(document.getElementById("topRight").value);
    var bottomLeft = Number(document.getElementById("bottomLeft").value);
    var bottomRight = Number(document.getElementById("bottomRight").value);
    //document.write(left)

    document.getElementById("border-radius").style.borderTopLeftRadius = topLeft + "px";
    document.getElementById("border-radius").style.borderTopRightRadius = topRight + "px";
    document.getElementById("border-radius").style.borderBottomLeftRadius = bottomLeft + "px";
    document.getElementById("border-radius").style.borderBottomRightRadius = bottomRight + "px";
    
} 