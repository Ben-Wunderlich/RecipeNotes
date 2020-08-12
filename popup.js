var papaURL;

function addNoteSpace() {
    document.getElementById("noteSpace").style.display = "inline";
    noteFromStorage();
    document.getElementById("addNote").style.display = "none";
}

function urlHasNote(url){
    return localStorage.getItem(url) !==null;
}

function noteFromStorage(){
    if(urlHasNote(papaURL)){
        document.getElementById("noteBody").innerHTML = localStorage[papaURL]
    }
}

function saveNote(){
    var inputVal = document.getElementById("noteBody").value;
    let url = papaURL;
    localStorage[url] = inputVal;
    closeNote();
}

function closeNote(){
    window.close();
}

function getURL(){
    chrome.runtime.sendMessage({greeting: "GetURL"},
    function (response) {
        tabURL = response.navURL;
        papaURL = tabURL;
        if(urlHasNote(papaURL)){
            document.getElementById("addNote").innerHTML = "edit note"
        }
        //$("#tabURL").text(tabURL);
    });
    return true;
}

function deleteNote(){
    if(!noteFromStorage(papaURL)){
        localStorage.removeItem(papaURL);
    }
    closeNote();
}