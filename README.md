# FakeTwitterPOC
Fake Twitter Profile detection proof-of-concept Chrome extension

This is the accompanying plug-in code to the Bitcoin Magazine article (insert URL when available)

Instructions:

1) Save files / clone to local folder
2) In Chrome enable developer mode
3) Go into Window -> Extensions
4) Click on "Load Unpacked"
5) Select folder with this code
6) Enable the plugin

Then for any Twitter profile you control:

1) Set your home domain / URL in the URL field of your Twitter profile
2) In the DNS settings for that domain create a TXT record: for **{Twitterhandle}.\_twitter** with value **{Twitterhandle}**
3) Create another TXT record with a wildcard: **\*.\_twitter** with any other value than a valid Twitter handle under this domain, i.e. **"fake"** or **"null"**

When you go to your Twitter profile page in Chrome and click on the plugin icon, press the "Check Account" button and if the DNS is in place you should get an indication that the account is valid and a bright red "X" if the Twitter handle doesn't match the one asserted in the DNS.

Examples:

Real Stuntpope account = https://twitter.com/StuntPope 

Fake Stuntpope account = https://twitter.com/StuntP0pe

