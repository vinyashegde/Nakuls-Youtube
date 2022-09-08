// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function (tab) {

        //testing code

        //var new_url = tab.url.replace(tab.url, "https://www.yout-ube.com/watch?v="+tab.url);
        //var new_url = tab.url.replace(tab.url, "https://www.yout-ube.com/watch?v="+tab.url);
        //var tablink = tab.url.length;
        //console.log(tablink);
        //chrome.tabs.update(tab.id, { url: new_url });

        var a = tab.url;
        var b = "-";
        var position = 16;
        var output = [a.slice(0, position), b, a.slice(position)].join('');

        console.log(output); //debug

        chrome.tabs.update(tab.id, { url: output });
        setTimeout(myFunction, 1000); //wait time 1000 = 1s
        //chrome.tabs.reload();

});

function myFunction() {
        chrome.tabs.reload(); // refreshs active tab
      }
