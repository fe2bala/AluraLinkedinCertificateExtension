# Chrome Extension: Alura Linkedin Certificate Auto-Fill
Add a button in your profile certificates to add it to linkedin, by opening Linkedin certificate page with most information filled.

## How to Install
1. Download this repository
2. open chrome extensions (`chrome://extensions`)
3. Click `Load Expanded Extension`
4. Pick this folder

## How to Use
1. Log in to Linkedin and keep it logged
2. Go to your certificates on Alura website
3. Click AutoAdd button
4. Once Linkedin page is open, press F5 to refrehs the page
5. Select Alura as authority
6. Click Save.

## Know Issues
* Authority field is not filled (I wasn't able to find a way to do so)
* You've to refresh the page, probably because Linkedin first loads `profile/add` and then redirects, I wasn't able to find a workaround
* Sometimes Certificate Name shows an error that it needs a value, even though it's filled.
