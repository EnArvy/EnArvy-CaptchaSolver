document.getElementById("mastersave").onclick=mastersave;
function mastersave(){
  chrome.storage.local.get(['master'],function(result){
    if(document.getElementById("oldmaster").value==decrypted(result.master)){
      chrome.storage.local.set({master:encrypted(document.getElementById("master").value)});
      window.location.reload();}
})}

document.getElementById("moodlesave").onclick=moodlesave;
function moodlesave(){
  chrome.storage.local.get(['master'],function(result){
    if(encrypted(document.getElementById("moodlemasterpassword").value)==result.master){
      chrome.storage.local.set({moodleuname:encrypted(document.getElementById("moodleuname").value)});
      chrome.storage.local.set({moodlepass:encrypted(document.getElementById("moodlepass").value)});
      window.location.reload();}})}

document.getElementById("webmailsave").onclick=webmailsave;
function webmailsave(){
  chrome.storage.local.get(['master'],function(result){
    if(encrypted(document.getElementById("webmailmasterpassword").value)==result.master){
      chrome.storage.local.set({webmailuname:encrypted(document.getElementById("webmailuname").value)});
      chrome.storage.local.set({webmailpass:encrypted(document.getElementById("webmailpass").value)});
      window.location.reload();}})}

document.getElementById("kerberossave").onclick=kerberossave;
function kerberossave(){
  chrome.storage.local.get(['master'],function(result){
    if(encrypted(document.getElementById("kerberosmasterpassword").value)==result.master){
      chrome.storage.local.set({kerberosuname:encrypted(document.getElementById("kerberosuname").value)});
      chrome.storage.local.set({kerberospass:encrypted(document.getElementById("kerberospass").value)});
      window.location.reload();}})}


     

