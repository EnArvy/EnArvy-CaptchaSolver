document.getElementById("moodlesave").onclick=moodlesave;
function moodlesave(){
  window.localStorage.setItem("moodleuname",document.getElementById("moodleuname").value);
  chrome.storage.local.set({moodlepass:document.getElementById("moodlepass").value});
}