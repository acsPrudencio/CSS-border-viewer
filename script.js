function change() {
    var topLeft = Number(document.getElementById("topLeft").value);
    var topRight = Number(document.getElementById("topRight").value);
    var bottomLeft = Number(document.getElementById("bottomLeft").value);
    var bottomRight = Number(document.getElementById("bottomRight").value);
    var areaCode = document.getElementById("areaCode");
    //document.write(left)
    
    document.getElementById("border-radius").style.borderTopLeftRadius = topLeft + "px";
    document.getElementById("border-radius").style.borderTopRightRadius = topRight + "px";
    document.getElementById("border-radius").style.borderBottomLeftRadius = bottomLeft + "px";
    document.getElementById("border-radius").style.borderBottomRightRadius = bottomRight + "px";
    areaCode.innerHTML = `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px
                            -moz-border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px
                            -webkit-border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`
     
}

function copyText() {
    var copyText = document.getElementById("areaCode");
    copyText.setAttribute('type', 'text');
    copyText.select();
    document.execCommand("copy");
    copyText.setAttribute('type', 'hidden');
}