function retrieveKeys(){
    //return Object.entries(localStorage)
    var allKeys = [];
    for (i=0; i<=localStorage.length-1; i++)  
    {  
        key = localStorage.key(i);
        allKeys.push(key);
    }
    return allKeys;
}

function addAllElements(allKeys){
    allKeys.forEach(key => {
        var note = localStorage[key];
        addListElement(key, note);
    });
}

function shorten(str, targChars=80){
    return str.substring(0, targChars);
}

function addListElement(key, note){
    var elem=document.createElement("TR");
    var targ="_blank"
    elem.innerHTML="<td><a href="+key+" target="+targ+">"+shorten(key)+"</td>"+
    "<td>"+note+"</td>";

    var butt = document.createElement("TD");
    butt.innerHTML = "<button>delete</button>";
    elem.appendChild(butt);

    butt.addEventListener("click", function(){
        elem.remove();
        localStorage.removeItem(key);
    });

    document.getElementById("noteTable").appendChild(elem);
}

function main(){
    var all = retrieveKeys();
    addAllElements(all);
}

main();