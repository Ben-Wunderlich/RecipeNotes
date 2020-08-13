var papaURL;

function addNoteSpace() {
    document.getElementById("noteSpace").style.display = "inline";
    noteFromStorage();
    document.getElementById("loadingMessage").style.display = "none";
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

function KeySave(e){
    if(e.keyCode===13){
        saveNote();
        console.log("we workin");
    }
}

function getURL(){
    chrome.runtime.sendMessage({greeting: "GetURL"},
    function (response) {
        tabURL = response.navURL;
        papaURL = tabURL;
        addNoteSpace();
        if(urlHasNote(papaURL)){
            noteFromStorage();

            //document.getElementById("addNote").innerHTML = "edit note"
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

//EVENT LISTENERS
//document.getElementById("addNote").addEventListener("click", addNoteSpace);

document.getElementById("saveButton").addEventListener("click", saveNote);

document.getElementById("cancelButton").addEventListener("click", closeNote);

document.getElementById("delbutton").addEventListener("click", deleteNote);

document.getElementById("noteSpace").addEventListener("keydown", KeySave);

getURL()