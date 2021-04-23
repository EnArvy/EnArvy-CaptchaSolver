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

    document.getElementById("valuepkg3").value = String(captcha);//entering the captcha


    //retrieve username and password from storage and inputing
    chrome.storage.local.get(['moodleuname'],function(result){document.getElementById("username").value=result.moodleuname;});
    chrome.storage.local.get(['moodlepass'],function(result){document.getElementById("password").value=result.moodlepass;});
    
    //pressing login button
    document.getElementById("loginbtn").click();//click on login button
