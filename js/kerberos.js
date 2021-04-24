captcha = OCRAD(document.getElementsByClassName("captcha-image")[0]);

chrome.storage.local.get(['kerberosuname','kerberospass'],function(result){

    document.getElementsByName("username")[0].value=result.kerberosuname;
    document.getElementsByName("password")[0].value=result.kerberospass;
    document.getElementsByName("captcha")[0].value = captcha;
    document.getElementsByName("submit")[0].click();
  }
  );