captcha = document.getElementById("login").textContent;//get the captcha text
numbers = [...captcha.matchAll(/(\d\d\d|\d\d|\d)/g)];//get both numbers in captcha using regex

//get type of captcha and solve
if(/add/.test(captcha))
    captcha = Number(numbers[0][0])+Number(numbers[1][0]);
if(/subtract/.test(captcha))
    captcha = Number(numbers[0][0])-Number(numbers[1][0]);
if(/first/.test(captcha))
    captcha = Number(numbers[0][0]);
if(/second/.test(captcha))
    captcha = Number(numbers[1][0]);            

   
//retrieve username and password from local storage and inputing
console.log("bob");
  
chrome.storage.local.get(['moodleuname','moodlepass'],function(result){

    document.getElementById("username").value=result.moodleuname;
    document.getElementById("password").value=result.moodlepass;
    document.getElementById("valuepkg3").value = String(captcha);//entering the captcha
    document.getElementById("loginbtn").click();//click on login button
}
);
    