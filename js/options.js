AES_Init();




document.getElementById("moodlesave").onclick=moodlesave;
function moodlesave(){
  chrome.storage.local.set({moodleuname:document.getElementById("moodleuname").value});
  chrome.storage.local.set({moodlepass:document.getElementById("moodlepass").value});
}
document.getElementById("webmailsave").onclick=webmailesave;
function webmailsave(){
  chrome.storage.local.set({webmailuname:document.getElementById("webmailuname").value});
  chrome.storage.local.set({webmailpass:document.getElementById("webmailpass").value});
}

document.getElementById("master").onclick=mastersave;
function mastersave(){
  chrome
}