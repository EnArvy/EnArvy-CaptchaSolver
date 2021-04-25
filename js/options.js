document.getElementById("mastersave").onclick=mastersave;
function mastersave(){
  changepass("master",document.getElementById("oldmaster").value,document.getElementById("master").value);
}

document.getElementById("moodlesave").onclick=moodlesave;
function moodlesave(){
  change("moodleuname",document.getElementById("moodlemasterpassword").value,document.getElementById("moodleuname").value);
  change("moodlepass",document.getElementById("moodlemasterpassword").value,document.getElementById("moodlepass").value);
}
document.getElementById("webmailsave").onclick=webmailsave;
function webmailsave(){
  change("webmailuname",document.getElementById("webmailmasterpassword").value,document.getElementById("webmailuname").value);
  change("webmailpass",document.getElementById("webmailmasterpassword").value,document.getElementById("webmailpass").value);
}

document.getElementById("kerberossave").onclick=kerberossave;
function kerberossave(){
  change("kerberosuname",document.getElementById("kerberosmasterpassword").value,document.getElementById("kerberosuname").value);
  change("kerberospass",document.getElementById("kerberosmasterpassword").value,document.getElementById("kerberospass").value);
}


     

