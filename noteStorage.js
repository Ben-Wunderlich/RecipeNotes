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

function addListElement(key, note){
    var elem = document.createElement("LI");
    elem.innerHTML = "<a href="+key+">"+key+"</a><h3> has note: </h3><p>"+note+"</p>"

    var butt = document.createElement("BUTTON");
    butt.innerHTML = "delete";
    elem.appendChild(butt);

    butt.addEventListener("click", function(){
        elem.remove();
        localStorage.removeItem(key);
    });

    document.getElementById("noteList").appendChild(elem);
}

function main(){
    var all = retrieveKeys();
    addAllElements(all);
    //document.getElementById("note1").innerHTML = all;
}

main();

//document.getElementById("note1").addEventListener("click", saveNote);
