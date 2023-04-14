<h1 style="color:blue;">Vintage Encryption</h1><hr/><br/>
<p>As technology advances, security of users data are constantly undermined with threat actors gaining unauthorized access to sensitive information.</p><br/>
<p>Vintage encryption uses SHA-256 hashing algorithm to verify the authenticity and integrity of users by adding a very strong and unique salt of 37 index-based hexadecimals separated by special characters otherwise known as <b>acid</b> to a user's password in order to obfuscate hackers in their attempt to perform either of rainbow table or dictionary attacks.</p>

>
> <b style="color:red">Note:</b>While the addition of acid makes it incredibly difficult for hackers to decrypt digital signatures or passwords hashed with vintageCrypt thus increasing the amount of time needed to crack multiple accounts at a time, organizations must ensure they enforce password complexity rules, implement Two-factor authentication, protect access to their password databases and limit the number of password trials.

>
>
<h2>Usage:</h2><hr/>
<p>The module is compatible with CommonJS and can be installed as follows; </p>

><div style="background-color:silver; font-size:bold">npm install vintageCrypt</div>

><div>const vintageCrypt = require("vintageCrypt");</div>
>
>
><h2>Authentication:</h2><hr/>
>const hashedPassword = vintageCrypt.hash("userPassword");<br/>
>The value of hashedPassword is stored in the database as the cryptographic hash value of the user's password.<br/>
>
>
>To verify user's integrity during login, the following line of code can be followed;
>const isPasswordValid = vintageCrypto.verify("userPassword", hashedPassword);<br>
The variable isPasswordValid will return a boolean. It will return `true` if there is a match and `false` if there is no match.




