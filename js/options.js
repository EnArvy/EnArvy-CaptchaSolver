AES_Init();


document.getElementById("mastersave").onclick=mastersave;
function mastersave(){
  chrome.storage.local.set({master:document.getElementById("master").value});
  window.location.reload();
}

document.getElementById("moodlesave").onclick=moodlesave;
function moodlesave(){
  chrome.storage.local.set({moodleuname:document.getElementById("moodleuname").value});
  chrome.storage.local.set({moodlepass:document.getElementById("moodlepass").value});
  window.location.reload();
}

document.getElementById("webmailsave").onclick=webmailsave;
function webmailsave(){
  chrome.storage.local.set({webmailuname:document.getElementById("webmailuname").value});
  chrome.storage.local.set({webmailpass:document.getElementById("webmailpass").value});
  window.location.reload();
}

document.getElementById("kerberossave").onclick=kerberossave;
function kerberossave(){
  chrome.storage.local.set({kerberosuname:document.getElementById("kerberosuname").value});
  chrome.storage.local.set({kerberospass:document.getElementById("kerberospass").value});
  window.location.reload();
}

