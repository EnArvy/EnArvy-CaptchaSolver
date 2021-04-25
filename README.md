# EnArvy's Captcha Solver

This chrome extension solves captcha's and auto logins on various sites.
## Currently supported sites:
* Moodle
* Kerberos
* Webmail(Extremely low accuracy now, will be corrected later)
## Configuration
To install, clone this repository. Then go to chrome extensions menu and toggle developer mode. After that, click on load unpacked extension and select the place where the file manifest.json is located.

After installlation, click on the extension icon and press configure OR go to the options from the extension menu.

Then, Set a master password. To do this, input master password in new password field and leave the old password field blank. Click save.

After that,set up the username and password combinations for each site by entering the values on the respective fields.

### Password storage security
Currently, the passwords are stored encrypted with 256 bit AES encryption. So, it is almost impossible for an attacker to recover the passwords from the storage. HOWEVER, it is possible to get passwords via js injection. To implement an uncrackable password storage, it would need to have password entry upon every login. SO being provided with the choice between convenience and security, I chose to go with convenience, as that is the main point of the extension, and I would ask the user to not leave the device unattended.

 Now, an additional layer of security can be provided via JS Obfuscation using the numerous libraries available. I plan to do that, but since the repository is under evaluation, I have left it open for now.  
## Libraries Used:
* OCRAD-JS
* CBL-JS
* Crypto-JS