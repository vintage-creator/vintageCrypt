<h1>Vintage Encryption</h1><hr/><br/>
<p>As technology advances, security of users data are constantly undermined with bad actors gaining unauthorized access to sensitive information.</p>
<p>Vintage encryption uses SHA-256 hashing algorithm to verify the authenticity and integrity of users by adding an acid: A unique 32-hexadecimals separated by special characters hashed together with a user's password in order to obfuscate hackers in their attempt to perform either of rainbow table or dictionary attacks.</p>

> <b>Note:</b> While the addition of acid makes it incredibly difficult for hackers to decrypt digital signatures or passwords hashed with vintagecrypt thus increasing the amount of time needed to crack multiple accounts at a time, organizations must ensure they enforce password complexity rules, implement Two-factor authentication, protect access to their password databases and limit the number of password trials.

>

<h2>Usage:</h2><hr/>
<p>The module is compatible with CommonJS and can be installed as follows; </p>

> <h4>npm install vintagecrypt</h4>
>
> <h4>const vintageCrypt = require("vintagecrypt");</h4>
>
> <h2>Authentication:</h2><hr/>
> <h4>const hashedPassword = vintageCrypt.hash("userPassword");</h4><br/>
> The value of `hashedPassword` is stored in the database as the cryptographic hash value of the user's password.<br/>
>
> To verify user's integrity during login, the following line of code can be followed;
>
> <h4>const isPasswordValid = vintageCrypt.verify("userPassword", hashedPassword);</h4><br>
> The variable `isPasswordValid will return a boolean`. It will return `true` if there is a match and `false` if there is no match.
