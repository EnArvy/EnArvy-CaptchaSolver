document.getElementById("london").addEventListener("click",openCity(event, 'London'));
document.getElementById("paris").addEventListener("click",openCity(event, 'Paris'));
document.getElementById("tokyo").addEventListener("click",openCity(event, 'Tokyo'));


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("london").click();