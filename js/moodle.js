window.onload = function () {
  captcha = document.getElementById("login").textContent; //get the captcha text
  numbers = [...captcha.matchAll(/(\d\d\d|\d\d|\d)/g)]; //get both numbers in captcha using regex

  //get type of captcha and solve
  if (/add/.test(captcha))
    captcha = Number(numbers[0][0]) + Number(numbers[1][0]);
  if (/subtract/.test(captcha))
    captcha = Number(numbers[0][0]) - Number(numbers[1][0]);
  if (/first/.test(captcha)) captcha = Number(numbers[0][0]);
  if (/second/.test(captcha)) captcha = Number(numbers[1][0]);

  //retrieve username and password from local storage and inputing

  fill(
    "username",
    "moodleuname",
    "password",
    "moodlepass",
    captcha,
    "valuepkg3",
    "loginbtn"
  );
};
