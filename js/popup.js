document.getElementById("options").addEventListener("click",openoptions)
function openoptions(){
  chrome.runtime.openOptionsPage();
}