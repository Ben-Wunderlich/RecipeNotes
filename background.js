
//for if you want to have it do thing if on place it has seen before//
/*chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      // do your things
        
    }
})*/

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    if(request.greeting === "GetURL")
    {
        var tabURL = "Not set yet";
        chrome.tabs.query({active:true},function(tabs){
            tabURL = tabs[0].url;
            sendResponse( {navURL:tabURL} );
        });       
    }
    return true;
});
