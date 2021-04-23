document.getElementById("moodlesave").onclick=moodlesave;
function moodlesave(){
  chrome.storage.local.set({moodleuname:document.getElementById("moodleuname").value});
  chrome.storage.local.set({moodlepass:document.getElementById("moodlepass").value});
}