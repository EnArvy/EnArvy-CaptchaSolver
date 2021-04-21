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

    document.getElementById("username").value="username";
    document.getElementById("password").value="password";

    
    document.getElementById("loginbtn").click();//click on login button
